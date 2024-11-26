import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CustomerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'invoiceApp';
}
