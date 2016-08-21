
var app1=angular.module("EventsManager",['ngRoute','ngAnimate','ngTouch']);

app1.controller("EventController", function($scope,$location,$http,$routeParams,resultsFactory,typeFactory,dateFactory){
	
	$scope.products=events;
	
	$scope.go = function (path ,eventid) {
		console.log(eventid);
    $location.path( path + "/"+eventid);
    };

    if($routeParams.type_id){
      console.log($routeParams.type_id);
       typeFactory.all($routeParams.type_id).then(
        function(res){
          $scope.products = res;
          console.log($scope.products);
          console.log("updated");
        },
        function(err){
          console.error(err);
        });
     }
     else if($routeParams.date_id){
      console.log($routeParams.date_id);
       dateFactory.all($routeParams.date_id).then(
        function(res){
          $scope.products = res;
          console.log($scope.products);
          console.log("updated");
        },
        function(err){
          console.error(err);
        });
     }
     else{
      console.log("all");
      resultsFactory.all().then(
      function(res){
        $scope.products = res;
        console.log("updated");
      },
      function(err){
        console.error(err);
      }
      );
     }
    
  	$scope.typeclick= function(path,$event){	
       $location.path( path + "/"+$event.target.id);
	   };

	  $scope.dateclick= function(path,$event){
        $location.path( path + "/"+$event.target.id);
       };	
}); 


 
app1.controller("ImageController",function($scope,$routeParams,imageFactory,eventFactory){

    $scope.slides=images;
    $scope.product=event;
     console.log($routeParams);

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


app1.animation('.slide-animation', function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width;
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width;
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
});



	
var events=[];    // array of all events 
var images=[];    // array of all inages
var event=[];     // data of one single event
	 
	



