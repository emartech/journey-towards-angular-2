'use strict';

angular
  .module('phoneApp')
  .directive('carrierSelect', [
    function() {
      return {
        controller: ['$scope', '$rootScope', 'carrierRepository', function($scope, $rootScope, carrierRepository) {
          $scope.carriers = [];

          carrierRepository
            .getAll()
            .then((carriers) => $scope.carriers = carriers);

          $scope.selectCarrier = function(carrier) {
            $rootScope.$broadcast('carrier-selected', carrier);
          };
        }],
        templateUrl: 'js/carrier-select.tpl.html'
      };
    }
  ]);
