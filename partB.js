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

//Task 5: Find the Length of an Array
console.log(fruits.length);

//Task 6: Check for an Element
function isInArray(array, e) {
  return array.includes(e);
}
console.log(isInArray(fruits, "Kiwi"));
console.log(isInArray(fruits, "strawberry"));

//Task 7: Sort an Array
fruits.sort();
console.log(fruits);

//Task 8: Reverse an Array
fruits.reverse();
console.log(fruits);

//Task 9: Filter Array Elements
const numbers = [2, 55, 45, 86, 98, 31, 7, 50, 22, 26];
console.log(numbers);
function filterEvenNumbers(array) {
  const evenNumbers = array.filter((num) => num % 2 === 0);
  console.log(evenNumbers);
  return evenNumbers;
}
filterEvenNumbers(numbers);

//Task 10: Combine Two Arrays
const vegetables = ["carrot", "broccoli", "spinach", "tomato", "cucumber"];
const groceries = [...fruits, ...vegetables];
console.log(groceries);
