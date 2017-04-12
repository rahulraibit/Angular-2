import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerFormComponent } from './customer-form/customer-form.component'
import { TestPageComponent } from './test-page/test-page.component'
import { CustomerListComponent } from './customer-list/customer-list.component'

const routes: Routes = [
    { path: '', redirectTo: 'customer-list', pathMatch: 'full' },
    { path: 'index', component: CustomerFormComponent },
    { path: 'customer', component: CustomerFormComponent },
    { path: 'test', component: TestPageComponent },
    { path: 'customer-list', component: CustomerListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
