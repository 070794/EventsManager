
    explora.factory('registerFactory', function($http, $q) { 
      var results = {};  
      
      function _getAll(data){
        var d = $q.defer();
        
          $http({
           params: data,
           headers:{'Accept':'application/json'}, 
           method: 'POST',
           url: 'http://localhost:3000/register'                // correct it. url/register
        }).then(function successCallback(response) {
            // this callback will be called asynchronously
            // when the response is available
            console.log("success");
            d.resolve(response.data);
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