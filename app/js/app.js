'use strict';
import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { PhoneRepositoryService } from './services/phone-repository/phone-repository.service';
import { FilteredPhoneListService } from './services/filtered-phone-list/filtered-phone-list.service';
import { CarrierRepositoryService } from './services/carrier-repository/carrier-repository.service';
import { ACTUAL_YEAR } from './actual-year.token';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  PhoneRepositoryService, FilteredPhoneListService, CarrierRepositoryService,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(ACTUAL_YEAR, { useValue: 2016 })
]);