
var app1=angular.module("EventsManager",['ngRoute','ngAnimate', 'ngTouch']);

app1.controller("EventController", function($scope,$location,$http,resultsFactory,typeFactory,dateFactory){
	
	$scope.products=events;
	//$scope.images=events;
	$scope.go = function (path ,eventid) {
		console.log(eventid);
    $location.path( path + "/"+eventid);
    };


  	resultsFactory.all().then(
    function(res){
      $scope.products = res;
      console.log("updated");
    },
    function(err){
      console.error(err);
    }
    );


  	$scope.typeclick= function($event){
  		// console.log($event.target.id);
  		typeFactory.all($event.target.id).then(
	    function(res){
	      $scope.products = res;
	      console.log("updated");

	    },
	    function(err){
	      console.error(err);
	    }
	    )};

	  	$scope.dateclick= function($event){
	  		// console.log($event.target.id);
	  		dateFactory.all($event.target.id).then(
		    function(res){
		      $scope.products = res;
		      console.log("updated");

		    },
		    function(err){
		      console.error(err);
	    	}
       )};	

    // imageFactory.all().then(
    // function(res){
    //   $scope.images = res;
    //   console.log("updated");
    // },
    // function(err){
    //   console.error(err);
    // }
    // );

}); 


 
app1.controller("ImageController",function($scope,$routeParams,imageFactory,eventFactory){

    $scope.image=images;
    $scope.product=event;
     console.log($routeParams);

    $scope.current = 0;

    $scope.setCurrent = function(index){
      $scope.current = index;
    };

  	imageFactory.all($routeParams.event_id).then(
    function(res){
      $scope.image = res;
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

	
var events=[];    // array of all events 
var images=[];    // array of all inages
var event=[];     // data of one single event
	 
	



