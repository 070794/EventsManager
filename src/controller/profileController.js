 explora.controller("profileController",['$scope', '$location', '$http',
    '$routeParams', 'profileFactory',function($scope, $location, $http,
    $routeParams, profileFactory){
      $scope.products=[];

        console.log(usr_id);
        profileFactory.all(usr_id).then(
        function(res){
          $scope.products = res;
          console.log("updated");
        },
        function(err){
          console.error(err);
        });

     
  }]); 