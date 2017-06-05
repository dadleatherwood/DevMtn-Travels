angular.module('devmtnTravel').controller('bookedCtrl', function($scope,mainSrv, $stateParams){
  $scope.test = "Booked Test Passed"
  $scope.package = mainSrv.getPackageInfoById(parseInt($stateParams.id))
  
})
