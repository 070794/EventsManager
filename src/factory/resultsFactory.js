 
explora.factory('resultsFactory',function($http, $q) { 
  var results = {};  
  
  function _all(){
    var d = $q.defer();
      $http({
    method: 'GET',
    url: '/events'
    }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          d.resolve(response.data);
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