angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
  $scope.test = "Locations Test Passed"

  $scope.travelInfo = mainSrv.getTravelInfo()

})
