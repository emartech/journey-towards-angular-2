'use strict';

import { PhoneRepositoryService } from './services/phone-repository/phone-repository.service';
import { CarrierRepositoryService } from './services/carrier-repository/carrier-repository.service';


import { ShortDescriptionFilter } from './filters/short-description/short-description.filter';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { PhoneListItemComponent } from './components/phone-list-item/phone-list-item.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

angular
  .module('phoneApp', [
    'ngRoute'
  ])

  .constant('ACTUAL_YEAR', 2016)

  .service('phoneRepository', PhoneRepositoryService.create())
  .service('carrierRepository', CarrierRepositoryService.create())

  .component('searchBox', SearchBoxComponent.create())
  .component('phoneListItem', PhoneListItemComponent.create())
  .component('copyright', CopyrightComponent.create())
  
  .filter('shortDescription', ShortDescriptionFilter.create())

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/phone-list.tpl.html',
        controller: 'PhoneListController'
      })
      .when('/phone/:phoneId', {
        templateUrl: 'js/phone.tpl.html',
        controller: 'PhoneController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);


require('./phone-list.ctrl.js');
require('./phone.ctrl.js');
require('./carrier-select.directive.js');
