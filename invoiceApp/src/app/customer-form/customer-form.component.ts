import { Component } from '@angular/core';
import { Supplier } from '../invoice/models/supplier';

@Component({
  selector: 'app-customer-form',
  standalone:false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  testVariable: Supplier = new Supplier(5)

}
