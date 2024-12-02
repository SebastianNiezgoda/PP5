import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerFormComponent } from '../customer-form/customer-form.component';

import { CustomerListComponent } from './components/customer-list/customer-list.component';



@NgModule({
  declarations: [
    CustomerFormComponent,
  CustomerListComponent],
  exports:[
    CustomerFormComponent,CustomerListComponent],
  imports: [
    CommonModule,
    
    
    
  
  ]
})
export class InvoiceModule { }
