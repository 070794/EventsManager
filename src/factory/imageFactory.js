    explora.factory('imageFactory', function($http, $q) { 
      var results = {};  
      
      function _getAll(event_id){
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
           console.log(response);
           // called asynchronously if an error occurs
           // or server returns response with an error status.
         });
          
      
        return d.promise;       
      }
      
      results.all = _getAll;
      return results;
    }); 