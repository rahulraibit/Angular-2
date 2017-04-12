import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Store } from "@ngrx/store";
import { customer_list, CUSTOMER_ADD } from "reducers/customer-reducer";
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styles: [`
  .customer-form {
    border : 1px solid grey;
    padding : 10px 0;
  }
  input[type="button"] {
    margin-left : 10px;
  }
  .btn-footer {
    display : flex;
    background: #fff2e6;
    padding : 0 10px;
    justify-content: flex-end;
  }
  `],
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
