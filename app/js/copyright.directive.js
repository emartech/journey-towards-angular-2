'use strict';

angular
  .module('phoneApp')
  .directive('copyright', [
    function() {
      return {
        templateUrl: 'js/copyright.tpl.html'
      };
    }
  ]);