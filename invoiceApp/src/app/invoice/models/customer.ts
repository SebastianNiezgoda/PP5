export class Customer {
   
        constructor(){}
    
        companyname = "fsafasf";
        nip="asfafa";
        city:String="";
        street="";
        hn="";
        code="";
        active=true;
    
        getAddress():string{
            return `City: ${this.city}, Street: ${this.street}, house number: ${this.hn}, Zip code: ${this.code}`;
            
        }
    
        getData():string{
            return (`Company name: ${this.companyname}, Nip: ${this.nip}`)
    
        }
}
