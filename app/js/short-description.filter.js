'use strict';

angular.module('phoneApp')
  .filter('shortDescription', function() {
    return function(input, length) {
      length = length || 100;

      if (input && input.length > length) {
        return input.substring(0, length) + '...';
      } else {
        return input;
      }
    };
  });