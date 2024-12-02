import { Component } from '@angular/core';
import { Supplier } from '../invoice/components/models/supplier';
import { Customer } from '../invoice/components/models/customer';

@Component({
  selector: 'app-customer-form',
  standalone:true,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  testVariable: Supplier = new Supplier(5)

  customer: Customer = new Customer();

  saveData(){
    console.log(this.customer)
  }

}
