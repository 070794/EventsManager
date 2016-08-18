(function(){
var app1=angular.module("EventsManager",['ngRoute']);

var app2=angular.module("Home",[]);

app1.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    	controller: "EventController",
        templateUrl : "index.html"
    })
    .when("/red", {
    	controller: "EventController",
        templateUrl : "red.htm"
    })
    .otherwise({redirectTo: "/"});
});


app1.controller("EventController", function(){
	this.products=events;
	
});
	
var events=[
	 {
	 	name:"party1" , date: "28|4|2016" , venue: "JP nagar 1" , creator:"abc1" , description:"ajhADSjhsdfjhsdgjsfjd", 
	      images: [
	        "images/gem-02.gif",
	        "images/gem-05.gif",
	        "images/gem-09.gif"
	      ],
	      price: "100 rs"

	 },

	 {
	 	name:"party2" , date: "22|4|2016" , venue: "JP nagar 2 " , creator:"abc2" , description:"ajhADSjhsdfjhsdgjsfjd", 
	      images: [
	        "images/gem-02.gif",
	        "images/gem-05.gif",
	        "images/gem-09.gif"
	      ],
	      price: "100 rs"
	      
	 },

	 {
	 	name:"party3" , date: "29|4|2016" , venue: "JP nagar 3" , creator:"abc3" , description:"ajhADSjhsdfjhsdgjsfjd", 
	      images: [
	        "images/gem-02.gif",
	        "images/gem-05.gif",
	        "images/gem-09.gif"
	      ],
	      price: "100 rs"
	 }




]

})();


