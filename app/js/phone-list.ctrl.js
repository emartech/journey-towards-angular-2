'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', '$http', '$rootScope', '$filter', function($scope, $http, $rootScope, $filter) {
    $rootScope.actualYear = 2016;

    $scope.searchText = '';
    $scope.selectedCarrier = '';
    $scope.allPhones = [];
    $scope.phones = [];

    $rootScope.$on('carrier-selected', function($event, carrier) {
      $scope.selectedCarrier = carrier;
    });

    function getFilteredPhones() {
      return $filter('filter')($scope.allPhones, { name: $scope.searchText, carrier: $scope.selectedCarrier });
    }

    $scope.$watch('searchText', function() {
      $scope.phones = getFilteredPhones();
    });
    $scope.$watch('selectedCarrier', function() {
      $scope.phones = getFilteredPhones();
    });

    $http.get('/api/phones.json')
      .then(function (response) {
        $scope.phones = $scope.allPhones = response.data;
      });
  }]);

