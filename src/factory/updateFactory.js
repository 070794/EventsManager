explora.factory('updateFactory', function($http, $q) { 
      var results = {};

      
      function _all(data){
        var d = $q.defer();
        
          $http({
            params: data,
           headers:{'Accept':'application/json'}, 
           method: 'POST',
           url: '/updateEvent'
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            d.resolve(response.data);
            console.log(response.data);
            
          }, function errorCallback(response) {
            console.log(response);
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
          
      
        return d.promise;       
      }
      
      results.all = _all;
      return results;
    }); 
