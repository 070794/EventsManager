  app1.controller("loginController",function($scope,loginFactory){
   

     $scope.myFunc=function(){
      $scope.data={
      'username':$scope.usr,
      'password':$scope.password

    };
   

     console.log( $scope.data);

     loginFactory.all($scope.data).then(
          function(res){
            $scope.name = res[0].name;
            //console.log($scope.getid);
            console.log("updated");
          
          },
          function(err){
            console.error(err);
          });
    
   };

  });