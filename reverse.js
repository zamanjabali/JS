let n = 069;
let reversed = 0;
let remainder = 0;

let i = 1;
while (n > 0) {
    remainder = n % 10;
    reversed = reversed * 10 + remainder;
    n = Math.floor(n / 10);
    i++;
}
console.log(reverse = reversed);