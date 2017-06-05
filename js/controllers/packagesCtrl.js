angular.module('devmtnTravel').controller('packagesCtrl', function($scope,mainSrv,$stateParams){
  $scope.test = "Packages Test Passed"

  $scope.packageInfo = mainSrv.getPackageInfo($stateParams.country)
  

})
