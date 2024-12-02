import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductFormComponent } from './product-form/product-form.component';
import { CustomerListComponent } from '../invoice/components/customer-list/customer-list.component';



@NgModule({
  declarations: [ProductFormComponent],
  exports:[ProductFormComponent],
  imports: [
    CommonModule,
    ProductFormComponent,
  ]
})
export class ProductModule { }
