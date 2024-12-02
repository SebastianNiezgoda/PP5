import { Routes } from '@angular/router';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

export const routes: Routes = [
    {path: 'product-form', component: ProductFormComponent},
    {path: 'invoice', 
        loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoiceModule)
    }
];
