let numbers = [1, 2, 3, 4, 5];
let doubles = [];
let n;

let len = numbers.length;
for (let i = 0; i < len; i++) {
    n = numbers[i];
    doubles.push(n * 2);
}
console.log(doubles);
