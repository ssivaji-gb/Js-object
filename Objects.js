// Task 1: Create and Access Object Properties
// Problem:
//  Create an object named car with properties:
//  brand, model, year, and color.
//  Display each property value in the console.
// Sample Input:

//own code===========

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   color: "Blue"
// };

// console.log(Object.values(car));

// Task 2: Add, Update, and Delete Properties
// Problem:
//  Create an object person with name and age.
// Add a new property country.
// Update the age.
// Delete the name property.
//  Then log the final object.

//own code===========

// let person={names:"sivaji",
//     age:19,
//     }
// person.country="india"
// delete person.names
// person.age=26
// console.log(person);

// Expected Output Example:
// { age: 26, country: "India" }

// Task 3: Object with Methods
// Problem:
//  Create an object calculator with methods:

//own code===========

// let calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   sub(a, b) {
//     return a - b;
//   },
//   mul(a, b) {
//     return a * b;
//   },
// };
// console.log(calculator.add(4, 2));
// console.log(calculator.sub(4, 2));
// console.log(calculator.mul(4, 2));

// Task 4: Nested Object Access
// Problem:
// //  Create an object student with nested details:

//own code===========

// const student = {
//   name: "Anu",
//   grade: "A",
//   marks: {
//     math: 90,
//     english: 88,
//     science: 92,
//   },
// };
// let a = student.name;
// let b = student.marks.math;
// let c = student.marks.science;
// console.log("Student Name:", a);
// console.log("Math Marks:", b);
// console.log("Science Marks:", c);

// Task 5: Loop Through Object and Count Properties
// Problem:
//  Write a program to count how many properties are inside an object.
// Example Input:

//own code===========

// const laptop = {
//   brand: "HP",
//   processor: "i5",
//   ram: "16GB",
//   storage: "512GB SSD"
// };

// let a=Object.keys(laptop).length
// console.log(a);

// Task 6: Shallow Copy vs Deep Copy
// Problem:
//  You have the following object:
// const student = {
//   name: "John",
//   marks: { math: 90, science: 85 }
// };
// console.log(student);

// let a=Object.assign({},student)
// a.marks.math=100
// console.log(a);

// Concept:
//  Demonstrates how Object.assign() performs a shallow copy — nested objects still share references.
////code done by one by one 
// because I print original copy in (object.assign) after not print original ressign 
// but I before (object.assign) not assign .print in original  

// Task 7: Merge Multiple Objects
// Problem:

//own code===========

//  Combine the following objects into one single object:
// const obj1 = { id: 101, name: "Alice" };
// const obj2 = { age: 25 };
// const obj3 = { country: "India", department: "IT" };

// let a=({...obj1,...obj2,...obj3})
// console.log(a);

// Task 8: Freeze and Modify
// Problem:
//  Create an object and make it immutable using Object.freeze().
//  Try to:
// Add a new property
// Modify an existing property
// Delete a property

//own code===========

// const settings = {
//   theme: "dark",
//   fontSize: 14
// };
// Object.freeze(settings);
// settings.theme = "fight";
// settings.mode = "sivaji";
// delete settings.fontSize;
// console.log(settings);

// Task 9: Object Destructuring
// Problem:
//  Use destructuring to extract values from this object and rename them:

//own code===========

// const user = {
//   name: "Ravi",
//   age: 28,
//   address: {
//     city: "Chennai",
//     country: "India",
//   },
// };
// let {
//   name: userName,
//   age: userAge,
//   address: { city: City, country: Country },
// } = user;
// console.log("userName:", userName);
// console.log("userAge:", userAge);
// console.log("City:", City);
// console.log("Country:", Country);

// Task 10: Count Nested Object Properties
// Problem:
//  Write a function countProperties(obj) that counts all properties in a nested object (including nested levels).
// Example Input:

//own code===========

// function countProperties(obj) {
//   let count = 0;
//   for (let key in obj) {
//     count++;
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       count+=countProperties(obj[key])
//     }
//   }
//   return count
// }

// const person = {
//   name: "Kumar",
//   details: {
//     age: 30,
//     contact: { phone: "12345", email: "test@mail.com" },
//   },
// };

// console.log(countProperties(person));
