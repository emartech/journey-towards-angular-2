import { Component, Output, Input, EventEmitter } from '@angular/core';

import template from './bootstrap-select.tpl.html';

@Component({
  selector: 'bootstrap-select',
  template: template
})
export class BootstrapSelectComponent {

  @Input()
  options = [];

  @Input()
  placeholder = '';

  @Output()
  onSelect = new EventEmitter();

  displaySelectedOption() {
    return this.selectedOption || this.placeholder;
  }


  toggle() {
    this.isOpened = !this.isOpened;
  }


  select(option) {
    this.isOpened = false;
    this.selectedOption = option;
    this.onSelect.emit(option);
  }

}
