let shoppingList = ["Rice", "Bread", "flour", "sugar", "salt", "oil","milk"];
console.log("Total items:", shoppingList.length);

let ismilkAvailable = shoppingList.includes("milk");
console.log("Is milk available?", ismilkAvailable);

if (!ismilkAvailable) {
  shoppingList.unshift("Milk");
}
console.log("Updated shopping list:", shoppingList);

// working true and false 
