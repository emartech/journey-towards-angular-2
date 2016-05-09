'use strict';

angular
  .module('phoneApp')
  .controller('PhoneListController', ['$scope', 'filteredPhoneList', function($scope, filteredPhoneList) {
    $scope.phones = filteredPhoneList;
    filteredPhoneList.load();
  }]);

