import { Component, Inject, Attribute } from '@angular/core';

import template from './copyright.tpl.html';

@Component({
  selector: 'copyright',
  template: template
})
export class CopyrightComponent {

  constructor(@Inject('ACTUAL_YEAR') actualYear) {
    this.actualYear = actualYear;
  }

}
