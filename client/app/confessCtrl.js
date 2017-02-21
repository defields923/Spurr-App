angular.module('Confess-Ctrl', [])
.controller('confessCtrl', function ($scope) {
  $scope.message = '';

  $scope.background = '';

  $scope.fonts = [
    'Arial',
    'Helvetica',
    'Futura',
    'Times',
    'Comic Sans MS',
    'Papyrus',
    'Courier New',
    'Arial Black',
    'Impact'
  ].sort();

  $scope.sizes = [
    12, 14, 16, 18, 20, 24, 28, 32, 36
  ].sort();
});
