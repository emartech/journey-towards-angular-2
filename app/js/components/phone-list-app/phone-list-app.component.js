import { Component } from '@angular/core';

import template from './phone-list-app.tpl.html';
import { FilteredPhoneListService } from '../../services/filtered-phone-list/filtered-phone-list.service';
import { PhoneListItemComponent } from '../phone-list-item/phone-list-item.component';
import { CopyrightComponent } from '../copyright/copyright.component';
import { SearchBoxComponent } from '../search-box/search-box.component';
import { CarrierSelectComponent } from '../carrier-select/carrier-select.component';

@Component({
  selector: 'phone-list-app',
  template: template,
  directives: [PhoneListItemComponent, CopyrightComponent, SearchBoxComponent, CarrierSelectComponent]
})
export class PhoneListAppComponent {

  constructor(filteredPhoneList: FilteredPhoneListService) {
    this.phones = filteredPhoneList;
  }


  ngOnInit() {
    this.phones.load();
  }

}