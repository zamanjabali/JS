class car{
    brand;
    model;
    year;

    constructor(br, mo, yr){
        this.brand = br;
        this.model = mo;
        this.year = yr;
    }
    displaydetails(){
        console.log(`Car Details: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}
let myCar = new car("mahindra", "Thar Roxx", 2025);
myCar.displaydetails();

let myCar2 = new car("Tata", "Nexon", 2024);
myCar2.displaydetails();