'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', '$rootScope', '$filter', 'phoneRepository', function($scope, $rootScope, $filter, phoneRepository) {
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

    phoneRepository
      .getAll()
      .then((phones) => $scope.phones = $scope.allPhones = phones);

  }]);

