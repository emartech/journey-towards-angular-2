import { Component, Output, EventEmitter } from '@angular/core';

import template from './search-box.tpl.html';

@Component({
  selector: 'search-box',
  template: template
})
export class SearchBoxComponent {

  @Output()
  onInputChange = new EventEmitter();

  handleKeyUp($event) {
    this.onInputChange.emit($event.target.value);
  }

}
