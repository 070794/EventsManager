

  explora.controller("formController",function($scope, $location,createFactory){
   
    $scope.event_type="art";
     $scope.getData=function(){
      $scope.data={
      'event_title':  $scope.event_title,
      'event_date':  $scope.event_date.toISOString().slice(0, 10)+" "+ $scope.event_time.toISOString().slice(12, 19),

      'event_venue':  $scope.event_venue,
      'event_type':  $scope.event_type,
      'event_author': usr_name,
      'event_price':  $scope.event_price,
      'event_description':  $scope.event_description

    };

    $scope.getid;
    
     // console.log(usr_name);
     // console.log( $scope.data);
     // console.log($scope.event_time.toISOString().slice(12, 19));
    
     createFactory.all( $scope.data).then(
          function(res){
             $scope.getid = res.insertId;
            // console.log($scope.getid);
            // console.log("/#upload" + "/"+$scope.getid);
            $location.path( "upload" + "/"+$scope.getid);

            console.log("updated");
          },
          function(err){
            console.error(err);
          });
     return false;
    
   };

  });