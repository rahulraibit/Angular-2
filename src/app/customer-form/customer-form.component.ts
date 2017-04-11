import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styles: [],
})
export class CustomerFormComponent implements OnInit {

  constructor( @Inject('customer') private customer) { }
  onAddCustomer(value) {
    console.log(value);
    this.customer.addCustomer(value);
  }
  ngOnInit() {
  }

}
