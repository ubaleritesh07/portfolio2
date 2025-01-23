var typed = new Typed(".text",{
    strings: ["Frontend Developer","Cyber Analyst","Web Developer"],
    typeSpeed: 100, 
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

angular.module('myApp', [])
  .controller('myCtrl', function($scope) {
    $scope.typedText = "";
    
    var typedStrings = ["Frontend Developer", "Cyber Analyst", "Web Developer"];
    var index = 0;

    function typeNextString() {
      $scope.typedText = "";
      var str = typedStrings[index];
      var i = 0;
      var typingInterval = setInterval(function() {
        $scope.$apply(function() {
          $scope.typedText += str.charAt(i);
        });
        i++;
        if (i > str.length - 1) {
          clearInterval(typingInterval);
          setTimeout(function() {
            eraseString();
          }, 1000);
        }
      }, 100);
    }

    function eraseString() {
      var str = $scope.typedText;
      var i = str.length - 1;
      var eraseInterval = setInterval(function() {
        $scope.$apply(function() {
          $scope.typedText = str.substring(0, i);
        });
        i--;
        if (i < 0) {
          clearInterval(eraseInterval);
          index = (index + 1) % typedStrings.length;
          setTimeout(function() {
            typeNextString();
          }, 1000);
        }
      }, 100);
    }

    typeNextString();
  });

