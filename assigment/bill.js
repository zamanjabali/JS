let name = "zaman"
let cons_NO = "101"
let units = "100"

let amount = 0;
if(amount<=100){
    amount = units*1.5;

}else if(units <=200){
    amount = (100*1.5) + (units-100)*2.5;
}
else if(units <=400){
    amount = (100*1.5) + (100*2.5) + (units-200)*3.5;
}
else{
    amount = (100*1.5) + (100*2.5) + (200*3.5) + (units-400)*4;
}
console.log(`Name: ${name}`);
console.log(`Consumer No: ${cons_NO}`);
console.log(`Units Consumed: ${units}`);
console.log(`Amount: ${amount}`);









