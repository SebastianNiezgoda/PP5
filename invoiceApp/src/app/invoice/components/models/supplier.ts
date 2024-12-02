import { Customer } from "./customer";
import { Invoice } from "./invoice";

export class Supplier extends Customer {
    constructor(anumber:Number){
        super();
        this.number = anumber;
    }
    number:Number = 0
    invoces:Invoice[] = [];
}
