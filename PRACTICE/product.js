class product{
    name;
    price;
    quantity;

    constructor(n,p,q){
        this.name=n;
        this.price=p;
        this.quantity=q;
    }
    calculatetotalvalue(){
        return this.price*this.quantity;
    }

    applydiscount(discount){
        return this.price-(this.price*discount)/100;
    }

    restock(q){
        this.quantity+=q;
    }

    isoutofstock(){
        return this.quantity===0;
    }

    displayproductinfo(){
        console.log(`Product Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
        );
    }
}
let totalvalue = product1.calculatetotalvalue();
log(`Total value of ${product1.name}: $${totalvalue}`);
let discountedprice = product1.applydiscount(10);
log(`Price of ${product1.name} after 10% discount: $${discountedprice}`);
product1.restock(20);
