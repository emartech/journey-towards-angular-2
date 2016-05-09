import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class PhoneRepositoryService {
  constructor(http: Http) {
    this._http = http;
  }


  getOne(phoneId) {
    return this._http
      .get(`/api/${phoneId}.json`).toPromise()
      .then((response) => response.json());
  }


  getAll() {
    return this._http
      .get('/api/phones.json').toPromise()
      .then((response) => response.json());
  }
}
