// Part A
// Task 1: Create a Simple Object
let person = {
  name: "Or Cohen",
  age: 29,
  isStudent: true,
};
console.log(person);

// Task 2: Access Object Properties
console.log(person.name, ",", person.age);
console.log(person["isStudent"]);

//Task 3: Update Properties
person.age = 30;
person.hobby = "Scoba diving";
console.log(person);

// Task 4: Add and Update Multiple Properties

const movie = {
  title: "blabla",
  genre: "somthing",
};
console.log(movie);

movie.releaseYear = 2024;
movie.isPopular = false;
movie.genre = "somthing else";

console.log(movie);

//Task 5: Loop Through Object Properties
//Create an object car with properties like make, model, year, and color.
//Use a for...in loop to log all the keys and values of the car object.

const car = {
  make: "Nissan",
  model: "Micra",
  year: 2019,
  color: "blue",
};

for (const key in car) {
  console.log(key, ":", car[key]);
}

//Task 6: Combine Objects
const firstPerson = {
  name: "Or Cohen",
  age: 29,
};

const secondPerson = {
  name: "Yuval Rotal",
  age: 25,
};

function combinePeople(obj1, obj2) {
  return {
    "first person's name": obj1.name,
    "first person's age": obj1.age,
    "second person's name": obj2.name,
    "second person's age": obj2.age,
  };
}

const combinedPerson = combinePeople(firstPerson, secondPerson);
console.log(combinedPerson);

// Task 7: Count Object Properties
function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log("Number of properties in movie object:", countProperties(movie));
console.log("Number of properties in movie object:", countProperties(person));

// Task 8: Delete a Property
delete person.isStudent;
console.log(person);

//Task 9: Check Property Existence
function hasProperty(obj, prop) {
  return prop in obj;
}

console.log(hasProperty(car, "make"));
console.log(hasProperty(car, "owner"));

//Task 10: Edit an Object Using a Function
function updatePerson(person, key, value) {
  person[key] = value;
  return person;
}

console.log(updatePerson(person, "age", 10));
console.log(updatePerson(person, "city", "Tel Aviv"));
