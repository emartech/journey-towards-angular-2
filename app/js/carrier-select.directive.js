'use strict';

angular
  .module('phoneApp')
  .directive('carrierSelect', [
    function() {
      return {
        controller: ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
          $scope.carriers = [];
          $scope.isCarrierSelectorOpened = false;

          $http.get('/api/carriers.json')
            .then(function (response) {
              $scope.carriers = response.data;
            });
          
          $scope.selectCarrier = function(carrier) {
            $rootScope.$broadcast('carrier-selected', carrier);
            $scope.isCarrierSelectorOpened = false;
          };
        }],
        templateUrl: 'js/carrier-select.tpl.html'
      };
    }
  ]);
