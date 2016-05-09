import { Injectable } from '@angular/core';

import { PhoneRepositoryService } from '../phone-repository/phone-repository.service';

export class FilteredPhoneListService {

  constructor(phoneRepository: PhoneRepositoryService) {
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
    this._phones = this._allPhones.filter((phone) => {
      return this._filterName(phone) && this._filterCarrier(phone);
    });
  }

  _filterName(phone) {
    return !this._searchText || phone.name.toLowerCase().indexOf(this._searchText.toLowerCase()) !== -1;
  }

  _filterCarrier(phone) {
    return !this._selectedCarrier || phone.carrier.toLowerCase() == this._selectedCarrier.toLowerCase();
  }
}
