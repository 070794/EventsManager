explora.controller("updateController",['$scope','$routeParams', '$location','eventFactory','updateFactory',function($scope,$routeParams, $location,eventFactory,updateFactory){
   
   $scope.product=[];
    eventFactory.all($routeParams.event_id).then(
      function(res){
        $scope.product = res[0];
      },
      function(err){
        console.error(err);
      });


       $scope.getData=function(){

    $scope.getid;
  
    
   updateFactory.all( $scope.product).then(
          function(res){
             $scope.getid = res.insertId;
            $location.path( "/all");

          },
          function(err){
            console.error(err);
          });
     return false;
    
   };

}]);