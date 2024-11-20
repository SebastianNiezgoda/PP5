class Customer2{
    constructor(){}

    companyname = "fsafasf";
    nip="asfafa";
    city="";
    street="";
    hn="";
    code="";
    active=true;

    getAddress = function(){
        return `City: ${city}, Street: ${street}, house number: ${hn}, Zip code: ${code}`;
        
    }

    getData = function(){
        return (`Company name: ${companyname}, Nip: ${nip}`)

    }

};

class Supplier extends Customer2{
    constructor(anumber){
        super();
        this.number=anumber;
    }
    invoces = [];
};