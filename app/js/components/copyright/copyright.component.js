import { Component, Inject } from '@angular/core';

import { ACTUAL_YEAR } from '../../actual-year.token';
import template from './copyright.tpl.html';

@Component({
  selector: 'copyright',
  template: template
})
export class CopyrightComponent {

  constructor(@Inject(ACTUAL_YEAR) actualYear) {
    this.actualYear = actualYear;
  }

}
