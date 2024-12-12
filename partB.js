//Part B: JavaScript Arrays
//Task 1: Create an Array
const fruits = ["Apple", "Orange", "Pear", "BlackBerry", "Banana"];
console.log(fruits);

//Task 2: Access Array Elements
console.log("1st element:", fruits[0]);
console.log("3rd element:", fruits[2]);

//Task 3: Add and Remove Elements
fruits.push("Pineapple");
console.log(fruits);
fruits.unshift("Kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);

//Task 4: Iterate Over an Array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit in fruits) {
  console.log(fruits[fruit]);
}
