(function(){
var app1=angular.module("EventsManager",['ngRoute']);

var app2=angular.module("Home",[]);

app1.controller("EventController", function($scope,$http,resultsFactory){
	$scope.products=events;
	//$scope.images=events;
	
  	resultsFactory.all().then(
    function(res){
      $scope.products = res;
      console.log("updated");
    },
    function(err){
      console.error(err);
    }
    );

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
 
 app1.factory('resultsFactory', function($http, $q) { 
  var results = {};  
  
  function _all(){
    var d = $q.defer();
      $http({
  		 method: 'GET',
 		 url: 'http://localhost:3000/events'
		}).then(function successCallback(response) {
    		// this callback will be called asynchronously
    		// when the response is available
    		console.log("success");
    		d.resolve(response.data);
    		console.log(response.data);
    		this.data={'user' : response.data };

  		}, function errorCallback(response) {
  			console.log("failure");
    		// called asynchronously if an error occurs
    		// or server returns response with an error status.
  		});
  		
  
    return d.promise;       
  }
  
  results.all = _all;
  return results;
}); 

// app1.factory('imageFactory', function($http, $q) { 
//   var results = {};  
  
//   function _all(){
//     var d = $q.defer();
//       $http({
//   		 method: 'GET',
//  		 url: 'http://localhost:3000/images'
// 		}).then(function successCallback(response) {
//     		// this callback will be called asynchronously
//     		// when the response is available
//     		console.log("success");
//     		d.resolve(response.data);
//     		console.log(response.data);
    		

//   		}, function errorCallback(response) {
//   			console.log("failure");
//     		// called asynchronously if an error occurs
//     		// or server returns response with an error status.
//   		});
  		
  
//     return d.promise;       
//   }
  
//   results.all = _all;
//   return results;
// });  
	

	

	
var events=[];
	 
	

})();


