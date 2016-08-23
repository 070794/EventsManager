
var app1=angular.module("EventsManager",['ngRoute','ngAnimate','ngTouch']);
 
app1.config(['$routeProvider','$locationProvider',function($routeProvider){

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
	.when('/login',{
		templateUrl: 'login.html',
        controller:'loginController'
	})
	.when('/create',{
		templateUrl: 'create.html',
        controller:'formController'
	})
	.when('/register',{
		templateUrl: 'register.html',
        controller:'registerController'
    })
    .otherwise({ redirectTo: '/' });

}]);

app1.factory('facebookService', function($q) {
    return {
        getMyLastName: function() {
            var deferred = $q.defer();
            FB.api('/me', {
                fields: 'last_name'
            }, function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
});
	 
	



