"use strict";
class Customer2 {
    constructor() {
        this.companyname = "fsafasf";
        this.nip = "asfafa";
        this.city = "";
        this.street = "";
        this.hn = "";
        this.code = "";
        this.active = true;
        this.getAddress = function () {
            return `City: ${city}, Street: ${street}, house number: ${hn}, Zip code: ${code}`;
        };
        this.getData = function () {
            return (`Company name: ${companyname}, Nip: ${nip}`);
        };
    }
}
;
class Supplier extends Customer2 {
    constructor(anumber) {
        super();
        this.invoces = [];
        this.number = anumber;
    }
}
;
