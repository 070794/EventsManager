explora.controller("updateController",function($scope,$routeParams, $location,eventFactory,updateFactory){
   
   $scope.product=[];
    eventFactory.all($routeParams.event_id).then(
      function(res){
        $scope.product = res[0];
        //$scope.product.dt=new Date($scope.product.dt.replace('T', ' ').slice(0,19)).toString().slice(0,24);
        console.log($scope.product.type);
        console.log($scope.product.venue);
        console.log("updated");

      },
      function(err){
        console.error(err);
      });


       $scope.getData=function(){
    //   $scope.data={
    //   'event_title':  $scope.event_title,
    //   'event_date':  $scope.event_date.toISOString().slice(0, 10)+" "+ $scope.event_time.toISOString().slice(12, 19),

    //   'event_venue':  $scope.event_venue,
    //   'event_type':  $scope.event_type,
    //   'event_author': usr_name,
    //   'event_price':  $scope.event_price,
    //   'event_description':  $scope.event_description

    // };

    $scope.getid;
    console.log($scope.product);
    
   updateFactory.all( $scope.product).then(
          function(res){
             $scope.getid = res.insertId;
            // console.log($scope.getid);
            // console.log("/#upload" + "/"+$scope.getid);
            $location.path( "/all");

            console.log("updated");
          },
          function(err){
            console.error(err);
          });
     return false;
    
   };
   


  
  });