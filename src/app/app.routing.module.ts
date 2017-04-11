import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerFormComponent } from './customer-form/customer-form.component'
import { TestPageComponent } from './test-page/test-page.component'

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: CustomerFormComponent },
    { path: 'customer', component: CustomerFormComponent },
    { path: 'test', component: TestPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
