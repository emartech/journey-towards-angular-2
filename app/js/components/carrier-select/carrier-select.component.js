import { Component, Output, EventEmitter } from '@angular/core';

import { CarrierRepositoryService } from '../../services/carrier-repository/carrier-repository.service';
import template from './carrier-select.tpl.html';
import { BootstrapSelectComponent } from '../bootstrap-select/bootstrap-select.component';

@Component({
  selector: 'carrier-select',
  template: template,
  directives: [BootstrapSelectComponent]
})
export class CarrierSelectComponent {

  @Output()
  onSelect = new EventEmitter();

  constructor(carrierRepository: CarrierRepositoryService) {
    this._carrierRepository = carrierRepository;
    this.carriers = [];
  }

  select(carrier) {
    this.onSelect.emit(carrier);
  }

  ngOnInit() {
    this._carrierRepository
      .getAll()
      .then((carriers) => this.carriers = carriers);
  }
}
