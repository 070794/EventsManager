  explora.controller("registerController",function($scope,registerFactory){
   
    
     $scope.myFunc=function(){
      $scope.data={
      'name':$scope.name,
      'email':$scope.email,
      'password':$scope.password

    };


     console.log( $scope.data);
     

    registerFactory.all( $scope.data).then(
          function(res){
            $scope.getid = res;
            console.log($scope.getid);
            console.log("updated");
          },
          function(err){
            console.error(err);
          });
    
   };

  });
