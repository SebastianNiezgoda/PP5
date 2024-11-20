function Customer(){
    this.companyname = "";
    this.nip="";
    this.city="";
    this.street=""
    this.hn=""
    this.code=""
    this.active=true
    
    
};


function Supplier(numer){
    this.numerkonta = numer;
    this.invoces = [];
};
Supplier.prototype = new Customer();