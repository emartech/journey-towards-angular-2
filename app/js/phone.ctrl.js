'use strict';

angular
  .module('phoneApp')
  .controller('PhoneController', ['$http', '$routeParams', '$scope', '$rootScope', function($http, $routeParams, $scope, $rootScope) {
    $rootScope.actualYear = 2016;

    $scope.phone = {};

    $http.get('/api/' + $routeParams.phoneId + '.json')
      .then(function(response) {
        $scope.phone = response.data;
      });
  }]);
