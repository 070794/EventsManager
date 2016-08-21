

///----------------------------

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


//=--------------------------------------------------

app1.factory('typeFactory', function($http, $q) { 
  var results = {};  
  
  function _all(eventid){
    var d = $q.defer();
    var data={type: eventid};


      $http({
      	params: data,
    	headers:{'Accept':'application/json'},

  		method: 'GET',
  		
 		 url: 'http://localhost:3000/type'
		}).then(function successCallback(response) {
    		// this callback will be called asynchronously
    		// when the response is available
    		console.log("success");
    		d.resolve(response.data);
    		console.log(response.data);
    		

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


//-------------------------------------------------------


app1.factory('dateFactory', function($http, $q) { 
  var results = {}; 

    var start;
    var end;
  
 function _all(eventid){
    var d = $q.defer();
    
	if(eventid=='today')
	{

		start=new Date().toISOString().slice(0, 10).replace('T', ' ')+" 00:00:00";
		end= new Date().toISOString().slice(0, 10).replace('T', ' ')+" 23:59:59";

	}

	else if (eventid=='tomorrow')
	{
		var tomorrow= new Date();
	    tomorrow.setDate(tomorrow.getDate() + 1);

		start=tomorrow.toISOString().slice(0, 10).replace('T', ' ')+" 00:00:00";
		end= tomorrow.toISOString().slice(0, 10).replace('T', ' ')+" 23:59:59";

	}

	else if(eventid=='week')
	{ 
		start=new Date().toISOString().slice(0, 10).replace('T', ' ')+" 00:00:00";
		var week= new Date();
	    week.setDate(week.getDate() + 7);
	    end=week.toISOString().slice(0, 10).replace('T', ' ')+" 23:59:59";

	}

	else if(eventid=='month')
	{ 
		start=new Date().toISOString().slice(0, 10).replace('T', ' ')+" 00:00:00";
		var month= new Date();
	    month.setDate(month.getDate() + 30);
	    end=month.toISOString().slice(0, 10).replace('T', ' ')+" 23:59:59";

	}

    var data={date1: start, date2:end};

	$http({
		params: data,
		headers:{'Accept':'application/json'},

			method: 'GET',
			
			 url: 'http://localhost:3000/date'
		 }).then(function successCallback(response) {
			// this callback will be called asynchronously
			// when the response is available
				console.log("success");
				d.resolve(response.data);
				console.log(response.data);
				

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


//---------------------------------------************------------------------------
app1.factory('imageFactory', function($http, $q) { 
  var results = {};  
  
  function _all(event_id){
    var d = $q.defer();
    var data={image: event_id};

    $http({
      params: data,
      headers:{'Accept':'application/json'}, 
      method: 'GET',
      url: 'http://localhost:3000/images'
   }).then(function successCallback(response) {
       // this callback will be called asynchronously
       // when the response is available
       console.log("success");
       d.resolve(response.data);
       console.log(response.data);
        

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

//--------------****************--------------------------
app1.factory('eventFactory', function($http, $q) { 
  var results = {};  
  
  function _all(event_id){
    var d = $q.defer();
    var data={event: event_id};

    $http({
      params: data,
      headers:{'Accept':'application/json'}, 
      method: 'GET',
      url: 'http://localhost:3000/event_data'
   }).then(function successCallback(response) {
       // this callback will be called asynchronously
       // when the response is available
       console.log("success");
       d.resolve(response.data);
       console.log(response.data);
        

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

//---------------------------*******************-----------------------------------------


app1.factory('loginFactory', function($http, $q) { 
  var results = {};  
  
  function _all(data){
    var d = $q.defer();
   // var data={email: email, pass: pass};

      $http({
        params: data,
       headers:{'Accept':'application/json'}, 
       method: 'GET',
     url: 'http://localhost:3000/userlogin'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("success");
        d.resolve(response.data);
        console.log(response.data);
        
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

//***********************-----------------------CREATE------------ ************************************ 

app1.factory('createFactory', function($http, $q) { 
  var results = {};  
  
  function _all(data){
    var d = $q.defer();
    
      $http({
        params: data,
       headers:{'Accept':'application/json'}, 
       method: 'POST',
     url: 'http://localhost:3000/createEvent'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("success");
        d.resolve(response.data);
        console.log(response.data);
        
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


//*************************************************************************************************

app1.factory('registerFactory', function($http, $q) { 
  var results = {};  
  
  function _all(data){
    var d = $q.defer();
    
      $http({
       params: data,
       headers:{'Accept':'application/json'}, 
       method: 'POST',
     url: 'http://localhost:3000/register'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log("success");
        d.resolve(response.data);
        console.log(response.data);
        
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



