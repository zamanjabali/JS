let myName: string = "zaman";
let myAge: number = 21;
let isStudent: boolean = true;

function greet(name: string): string {
    return `Hello, ${name}! welcome to TypeScript.`;
}
console.log(greet("zaman"));
console.log(`My name is ${myName}, I am ${myAge} years old. Am I a student? ${isStudent}`);

let colores: string[] = ["red", "green", "blue"];
for (let color of colores) {
    console.log("favorite color:", color);
}

function factorial(n: number): number {
    if(n<0){
        console.log("Factorial is not defined for negative numbers.");
    }

    if (n === 0 || n === 1) return 1;

    let result: number = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
console.log("Factorial of 5 is:", factorial(5));
console.log("Factorial of 0 is:", factorial(0));

function isEven(num: number): boolean {
    if (!Number.isInteger(num) || num < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    return num % 2 === 0;
}

console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));

function sumArray(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of [1, 2, 3, 4, 5] is:", sumArray([1, 2, 3, 4, 5]));
console.log("sum of empty array :", sumArray([]));
