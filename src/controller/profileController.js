 explora.controller("profileController",['$scope', '$location', '$http',
    '$routeParams', 'profileFactory',function($scope, $location, $http,
    $routeParams, profileFactory){
      $scope.products=[];

        profileFactory.all(usr_id).then(
        function(res){
          $scope.products = res;
        },
        function(err){
          console.error(err);
        });

     
  }]); 