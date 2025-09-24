let fruits = ['Apple', 'Banana', 'Orange'];
fruits[1] = 'Grapes';
fruits.push('Mango');
fruits.push('Pineapple');

console.log(fruits);
let lastFruit = fruits.pop();
console.log('Last fruit: ', lastFruit);

let fruitCount = fruits.length;
console.log('Fruit count: ', fruitCount);

let i;
console.log('List of fruits:', fruits);
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}