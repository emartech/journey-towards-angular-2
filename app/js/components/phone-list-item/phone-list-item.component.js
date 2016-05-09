import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { ShortDescriptionPipe } from '../../pipes/short-description/short-description.pipe';

import template from './phone-list-item.tpl.html';

@Component({
  selector: 'list-item',
  directives: [ROUTER_DIRECTIVES],
  pipes: [ShortDescriptionPipe],
  template: template
})
export class PhoneListItemComponent {

  @Input()
  phone;

}


//'use strict';
//
//
//export class PhoneListItemComponent {
//
//  static create() {
//    return {
//      bindings: {
//        phone: '<'
//      },
//      controller: [PhoneListItemComponent],
//      template: require('./phone-list-item.tpl.html')
//    };
//  }
//
//
//}
