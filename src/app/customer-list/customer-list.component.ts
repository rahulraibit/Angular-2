import { Component, OnInit, Inject, Output, EventEmitter, Injectable } from '@angular/core';
import { Store } from '@ngrx/store'
import { Router } from "@angular/router";


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styles: [`
  .customer-list {
    border : 1px solid black;
   }
   .t-header-container {
     display : flex;
     justify-content : space-between;
     height : 40px;
     align-items : center;
     background : grey;
     font-weight : 800;
   }
   .t-row {
     display : flex;
     align-items : center;
     justify-content : space-between;
     margin-top : 10px;
     border-bottom : 1px solid grey;
     min-height : 50px;
   }
   .t-td {
     display : flex;
     min-width : 80px;
     align-items : center;
     justify-content : center;
     margin : 5px;
     font-weight : 500;
   }
   .t-header-item {
     display : flex;
     justify-content : center;
     min-width : 80px;
     margin : 5px;
     align-items : center;
   }
  .btn-footer {
    display : flex;
    background: #fff2e6;
    justify-content: flex-end;
  }
  `
  ]
})

export class CustomerListComponent implements OnInit {
  parentRouter: any;
  customers;
  constructor(private store: Store<any>, private r: Router) {
    this.parentRouter = r;
    this.customers = store.select('customer_list');
  }
  ngOnInit() {
  }
  goToNext() {
    console.log(this.parentRouter.navigate(['/customer']));
  }
}
