import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class CarrierRepositoryService {

  constructor(http: Http) {
    this._http = http;
  }


  getAll() {
    return this._http
      .get('/api/carriers.json').toPromise()
      .then((response) => response.json());
  }


  static create() {
    return ['$http', CarrierRepositoryService];
  }

}
