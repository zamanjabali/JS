let n = 676;
let nCopy = n;

let reverse = 0;
let remainder = 0;

while(n>0){
    remainder = n% 10;
    reverse = reverse*10 + remainder;
    n = Math.floor(n/10);
}
console.log("reverse ="+ reverse);
if(nCopy===reverse){
    console.log("ita a palindrome")
}else{
        console.log("it is not a palindrome")

}