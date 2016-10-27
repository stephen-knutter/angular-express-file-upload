var app = angular.module('fileUpload', ['ngFileUpload']);

app.controller('mainCtrl', ['$scope', 'Upload', '$timeout',
 function($scope, Upload, $timeout) {
   $scope.uploadPic = function(file) {
     file.upload = Upload.upload({
       url: '/pdf',
       data: {username: $scope.username, file: file}
     });

     file.upload.then(function(response) {
       $timeout(function() {
         file.result = response.data;
       });
     }, function(response) {
       if (response.status > 0)
        $scope.errorMsg = response.status + ': ' + response.data;
     }, function(evt) {
       file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
     });
   }
 }]);
