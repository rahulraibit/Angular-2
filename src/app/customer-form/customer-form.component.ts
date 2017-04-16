import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Store } from "@ngrx/store";
import { customer_list, CUSTOMER_ADD, CUSTOMER_EDIT } from "reducers/customer-reducer";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";

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
  input.ng-invalid.ng-dirty {
    border : 3px solid red;
  }
  input:focus.ng-valid.ng-dirty {
    border : 3px solid green;
  }
  `],
})
export class CustomerFormComponent implements OnInit {
  company: any;
  id: any;
  name: any;
  cid: number;
  sub: Subscription;
  cidDetails: any;
  parentRouter;
  customers: any;
  constructor( @Inject('customer') private customer,
    private store: Store<any>,
    private r: Router,
    private route: ActivatedRoute
  ) {
    this.parentRouter = r;
    this.customers = store.select('customer_list');
  }
  //Need to use the service for better code split and logic sepration.
  onAddCustomer(value) {
    console.log(value);
    //this.customer.addCustomer(value);
    if (!this.cid) {
      this.store.dispatch({ type: CUSTOMER_ADD, payload: value });
    } else {
      this.store.dispatch({ type: CUSTOMER_EDIT, payload: value });
    }
    alert('Data has been saved successfully');
  }
  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.cid = params['cid'] || 0;
        if (this.cid) {
          this.customers
            .subscribe(data => data.filter(f => {
              if (f.Id == this.cid) {
                this.id = f.Id;
                this.name = f.Name;
                this.company = f.Company;
              }
            }));
        }
      });
  }
  goToNext() {
    console.log(this.parentRouter.navigate(['/customer-list']));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
