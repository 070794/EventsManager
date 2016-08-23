//explora is the name of the website.
var explora=angular.module("EventsManager",['ngRoute','ngAnimate','ngTouch','ngFileUpload']);
 
explora.config(['$routeProvider','$locationProvider',function($routeProvider){

	$routeProvider.
	when('/',{
		templateUrl: 'view.html',
		controller : 'EventController'
	})
	.when('/events/:event_id',{
		templateUrl: 'event.html',
        controller:'ImageController'
	})
	.when('/type/:type_id',{
		templateUrl: 'view.html',
        controller:'EventController'
	})
	.when('/datetime/:date_id',{
		templateUrl: 'view.html',
        controller:'EventController'
	})
	.when('/create',{
		templateUrl: 'create.html',
        controller:'formController'
	})
    .when('/upload/:event_id',{
    	templateUrl:'upload.html',
        controller:'uploadController'
    });
    //.otherwise({ redirectTo: '/' });

}]);


 
	



