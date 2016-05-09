'use strict';

angular
  .module('phoneApp')
  .directive('searchBox', [
    function() {
      return {
        restrict: 'AEC',
        templateUrl: 'js/search-box.tpl.html'
      };
    }
  ]);