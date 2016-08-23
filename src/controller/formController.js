 explora.controller("formController",function($scope,createFactory){
   
    $scope.event_type="art";
     $scope.myFunc=function(){
      $scope.data={
      'event_title':  $scope.event_title,
      'event_date':  $scope.event_date.toISOString().slice(0, 10)+" "+ $scope.event_time.toISOString().slice(12, 19),

      'event_venue':  $scope.event_venue,
      'event_type':  $scope.event_type,
      'event_author': "sdfjhsjf",
      'event_price':  $scope.event_price,
      'event_description':  $scope.event_description

    };
    $scope.getid;

     console.log( $scope.data);
     console.log($scope.event_time.toISOString().slice(12, 19));

     createFactory.all( $scope.data).then(
          function(res){
            $scope.getid = res.insertId;
            console.log($scope.getid);
            console.log("updated");
          },
          function(err){
            console.error(err);
          });
    
   };

  });