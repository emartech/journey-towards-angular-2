'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', '$rootScope', '$filter', 'phoneRepository', function($scope, $rootScope, $filter, phoneRepository) {
    $scope.searchText = '';
    $scope.selectedCarrier = '';
    $scope.allPhones = [];
    $scope.phones = [];

    function getFilteredPhones() {
      return $filter('filter')($scope.allPhones, { name: $scope.searchText, carrier: $scope.selectedCarrier });
    }

    $scope.setSearchText = (value) => {
      $scope.searchText = value;
      $scope.phones = getFilteredPhones();
    };

    $scope.setSelectedCarrier = (value) => {
      $scope.selectedCarrier = value;
      $scope.phones = getFilteredPhones();
    };

    phoneRepository
      .getAll()
      .then((phones) => $scope.phones = $scope.allPhones = phones);

  }]);

