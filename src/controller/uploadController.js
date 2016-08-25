 
explora.controller('uploadController',['$scope','Upload','$window','$routeParams',function($scope,Upload,$window,$routeParams){
    //var $scope = this;
    $scope.submit = function(){ //function to call on form submit
        console.log("hii");
        if ($scope.upload_form.file.$valid && $scope.file) { 
            console.log("hii");//check if from is valid
            $scope.upload($scope.file); //call upload function
        }
    }
    
    $scope.upload = function (file) {
        Upload.upload({
            url: 'http://localhost:3000/upload', //webAPI exposed to upload the file
            data:{file:file,event_id:$routeParams.event_id} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            if(resp.data.error_code === 0){ //validate success
                $window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
            } else {
                $window.alert('an error occured');
            }
        }, function (resp) { //catch error
            console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            $scope.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };
}]);

