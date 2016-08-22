var images=[];    // array of all inages
var event=[];     // data of one single event
  app1.controller("ImageController",function($scope,$routeParams,imageFactory,eventFactory){

      $scope.slides=images;
      $scope.product=event;
      // console.log($routeParams);

      $scope.current = 0;

      $scope.setCurrent = function(index){
        $scope.current = index;
      };



          $scope.direction = 'left';
          $scope.currentIndex = 0;

          $scope.setCurrentSlideIndex = function (index) {
              $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
              $scope.currentIndex = index;
          };

          $scope.isCurrentSlideIndex = function (index) {
              return $scope.currentIndex === index;
          };

          $scope.prevSlide = function () {
              $scope.direction = 'left';
              $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
          };

          $scope.nextSlide = function () {
              $scope.direction = 'right';
              $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
          };

      imageFactory.all($routeParams.event_id).then(
      function(res){
          console.log("Here");
          console.log($routeParams);
        $scope.slides = res;
        console.log(res);
        console.log($scope.slides);
        console.log("updated");
      },
      function(err){
        console.error(err);
      }
      );

      eventFactory.all($routeParams.event_id).then(
      function(res){
        $scope.product = res[0];
        console.log($scope.product);
        console.log("updated");
      },
      function(err){
        console.error(err);
      });
  });