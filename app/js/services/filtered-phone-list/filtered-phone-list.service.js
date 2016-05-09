import { Injectable } from '@angular/core';

import { PhoneRepositoryService } from '../phone-repository/phone-repository.service';

export class FilteredPhoneListService {

  constructor(phoneRepository: PhoneRepositoryService) {
    this._filter = function(phones, criteria) {
      return phones.filter((phone) => {
        return (!criteria.name || phone.name.toLowerCase().indexOf(criteria.name.toLowerCase()) !== -1)
          && (!criteria.carrier || phone.carrier.toLowerCase() == criteria.carrier.toLowerCase());
      });
    };
    this._phoneRepository = phoneRepository;

    this._allPhones = [];
    this._phones = [];
    this._searchText = '';
    this._selectedCarrier = '';
  }


  load() {
    this._phoneRepository
      .getAll()
      .then((phones) => this._phones = this._allPhones = phones);
  }


  getAll() {
    return this._phones;
  }


  hasAny() {
    return this._phones.length > 0;
  }


  setSelectedCarrier(carrier) {
    this._selectedCarrier = carrier;
    this._filterPhones();
  }


  setSearchText(value) {
    this._searchText = value;
    this._filterPhones();
  }


  _filterPhones() {
    this._phones = this._filter(this._allPhones, { name: this._searchText, carrier: this._selectedCarrier });
  }
}
