import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ProductModule } from './product/product.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CustomerFormComponent,ProductModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invoiceApp';
}
