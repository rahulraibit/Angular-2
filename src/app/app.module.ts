import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { MailService } from './mail.service';
import { MessagesService } from './messages.service';
import { CustomerManagementService } from './customer-management.service'
import { AppRoutingModule } from './app.routing.module';
import { TestPageComponent } from './test-page/test-page.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { StoreModule } from "@ngrx/store";
import { customer_list } from "reducers/customer-reducer";
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    CustomerFormComponent,
    TestPageComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    StoreModule.provideStore({ customer_list }),
  ],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'message', useClass: MessagesService },
    { provide: 'customer', useClass: CustomerManagementService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/// ? Service injection are problem solved by dependencies injection but still property are tightly coupled 