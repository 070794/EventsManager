//explora is the name of the website.
var explora=angular.module("EventsManager", ['ngRoute','ngAnimate','ngTouch','ngFileUpload']);
explora.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/',{
		templateUrl: 'home.html',
		controller : 'EventController'
	})
	.when('/all',{
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
    })
    .when('/update/:event_id',{
        templateUrl:'update.html',
        controller:'profileController'
    })
    .when('/profile',{
        templateUrl:'view.html',
        controller:'profileController'
    })
   .otherwise({ redirectTo: '/' });

}]);


 
	



