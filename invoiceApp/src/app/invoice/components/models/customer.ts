export class Customer {
   
        constructor(){}
    
        name = "";
        nip="";
        city:String="";
        street="";
        hn="";
        code="";
        active=true;
    
        getAddress():string{
            return `City: ${this.city}, Street: ${this.street}, house number: ${this.hn}, Zip code: ${this.code}`;
            
        }
    
        getData():string{
            return (`Company name: ${this.name}, Nip: ${this.nip}`)
    
        }
}
