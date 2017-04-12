import { Component, OnInit, Inject, Output, EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store'


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styles: []
})

export class CustomerListComponent implements OnInit {
  customers;
  constructor(private store: Store<any>) {
    this.customers = store.select('customer_list');
  }
  ngOnInit() {
  }

}
