app1.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

	$routeProvider.
	when('/allevents',{
		templateUrl: 'view.html',
		controller : 'EventController'
	})
	.when('/events/:event_id',{
		templateUrl: 'event.html',
        controller:'ImageController'
	});

}]);