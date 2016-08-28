  
  explora.controller("EventController",['$scope', '$location', '$http',
    '$routeParams', 'resultsFactory', 'typeFactory', 'dateFactory','cover_images','title_message','sub_message',
    function($scope, $location, $http,$routeParams, resultsFactory, typeFactory, dateFactory,
      cover_images,title_message,sub_message){
     
      $scope.products=[];
      $scope.backgroundImage="./images/assets/constant/default.jpg";
      $scope.titleMessage = "Things To Do In Bengaluru & Beyond";
      $scope.subMessage = "Events​, Activities ​& ​ Experiences";
      $scope.cover_images = cover_images;
      $scope.title_messages=title_message;
      $scope.sub_messages=sub_message;

      $scope.go = function (path ,eventid) {
      
        $location.path( path + "/"+eventid);
      };

      function setBanner(id)
      {
        
         $scope.backgroundImage=$scope.cover_images[id];
         $scope.titleMessage = $scope.title_messages[id];
         $scope.subMessage = $scope.sub_messages[id];
      
      }

      if($routeParams.type_id && !$routeParams.date_id){

        setBanner($routeParams.type_id);

         typeFactory.all($routeParams.type_id).then(
          function(res){
            $scope.products = res;
           
            console.log("updated");
          },
          function(err){
            console.error(err);
          });
       }
       else if($routeParams.date_id && !$routeParams.type_id){
        
         setBanner($routeParams.date_id);
    
        dateFactory.all($routeParams.date_id).then(
          function(res){
            $scope.products = res;

            console.log("updated");
          },
          function(err){
            console.error(err);
          });
       }
       else{
        
        resultsFactory.all().then(
        function(res){
          $scope.products = res;
          console.log("updated");
        },
        function(err){
          console.error(err);
        });
       }

      $scope.typeclick= setpath;
      $scope.dateclick= setpath;

      $scope.allClick= function(path){
        $location.path(path+"/");
      
      };

      function setpath(path,$event){  
         $location.path( path + "/"+$event.target.id);
       };
  }]); 