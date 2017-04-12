import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Store } from "@ngrx/store";
import { customer_list, CUSTOMER_ADD } from "reducers/customer-reducer";
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styles: [],
})
export class CustomerFormComponent implements OnInit {
  parentRouter;
  customers;
  constructor( @Inject('customer') private customer, private store: Store<any>, private r : Router) { 
    this.parentRouter = r;
    this.customers = store.select('customer_list');
    console.log(this.customers);
  }
  onAddCustomer(value) {
    console.log(value);
    this.customer.addCustomer(value);
    this.store.dispatch({ type: CUSTOMER_ADD, payload: value });
  }
  ngOnInit() {
  }
  goToNext() {
    console.log(this.parentRouter.navigate(['/customer-list']));
  }
}
