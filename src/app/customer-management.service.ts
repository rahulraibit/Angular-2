import { Injectable } from '@angular/core';

@Injectable()
export class CustomerManagementService {
  customerList = [];
  constructor() { }
  addCustomer(customer) {
    if (customer) {
      if (this.customerList.length) {
        let isCustomerExist = this.customerList.find(f => f.Id === customer.Id);
        if (!isCustomerExist) {
          return this.customerList.push(customer);
        } else {
          return "Customer Id is already exist"
        }
      } else {
        this.customerList.push(customer);
      }
    }
  }
}
