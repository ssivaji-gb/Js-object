// 🧩 Task 1: Sum of Array Elements
// Description:
//  Write a program to calculate the sum of all numbers in an array.
// Sample Input:

/////OWN CODE==================


// let nums = [5, 10, 15, 20];
// let sum =0
// for(let i=0;i<nums.length;i++){
// sum+=nums[i]
// }
// console.log(sum);

// 🧩 Task 2: Find Maximum and Minimum
// Description:
//  Find the largest and smallest numbers in an array without using Math.max() or Math.min().
// Sample Input:

/////OWN CODE==================

// let arr = [12, 7, 45, 22, 9];
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } else if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log("min:",min);
// console.log("max:",max);

// 🧩 Task 3: Reverse an Array (without using reverse())
// Description:
//  Reverse the array elements manually using a loop.
// Sample Input:

/////OWN CODE==================

// let arr = [1, 2, 3, 4, 5];
// let rev=[]

// for (i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
//   rev.push(arr[i])
// }
// console.log(rev);

// 🧩 Task 4: Remove Duplicates from Array
// Description:
//  Remove duplicate elements and return only unique values.
// Sample Input:

/////OWN CODE==================

// let arr = [1, 2, 2, 3, 4, 4, 5,1];
// let uni=[];
// for (let i=0;i<arr.length;i++){
//     if(!uni.includes(arr[i])){
//         uni.push(arr[i])
//     }
// }
// console.log(uni);

// 🧩 Task 5: Count Occurrences of Each Element
// Description:
//  Display how many times each element appears in an array.
// Sample Input:

/////OWN CODE==================

// let arr = ["apple", "banana", "apple", "cherry", "banana", "apple"];
// let sets = {};

// for (let i = 0; i < arr.length; i++) {
//   if (sets[arr[i]]) {
//     sets[arr[i]] += 1;
//   }
//   else {
//     sets[arr[i]] = 1;
//   }
// }

// console.log(sets);

// 🧩 Task 6: Filter Even Numbers
// Description:
//  Return a new array containing only even numbers.
// Sample Input:

/////OWN CODE==================

// let arr = [10, 15, 20, 25, 30];
// let nums = arr.filter((Numbers) => Numbers % 2 == 0);
// console.log(nums);

// 🧩 Task 7: Merge Two Arrays Without Duplicates
// Description:
//  Combine two arrays and remove duplicates.
// Sample Input:

/////OWN CODE==================

// let a = [1, 2, 3];
// let b = [3, 4, 5];
// let c = a.concat(b);
// // console.log(c);
// let result = [];
// let set = {};
// for (let i = 0; i < c.length; i++) {
//   if (!set[c[i]]) {
//     set[c[i]] = true;
//     result.push(c[i]);
//   }
// }
// console.log(result);

// 🧩 Task 8: Sort Numbers Ascending & Descending
// Description:
//  Sort an array in both ascending and descending order using .sort().
// Sample Input:

/////OWN CODE==================

// let nums = [42, 7, 19, 3, 25];
// let asc = nums.sort((a, b) => a - b);
// console.log("Ascending:", asc);
// let desc = asc.reverse();
// console.log("Descending:", desc);

// 🧩 Task 9: Find Second Largest Number
// Description:
//  Find the second largest element in an array.
// Sample Input:

/////OWN CODE==================

// let arr = [10, 25, 5, 30, 20];
// let secondLargest = arr.sort((a, b) => a - b).reverse();
// console.log(secondLargest[1]);

// 🧩 Task 10: Flatten a Nested Array
// Description:
//  Convert a nested array into a single-level array.
// Sample Input:

/////OWN CODE==================

// let arr = [1, [2, [3, 4]], 5];
// let single = arr.flat(Infinity);
// console.log(single);

// 🧩 Task 11: Square Each Number (Using map())
// Description:
//  Create a new array where each element is the square of the numbers in the original array.
// Sample Input:

/////OWN CODE==================

// let nums = [2, 4, 6, 8];
// let square = nums.map((a) => a * a);
// console.log(square);

// 🧩 Task 12: Filter Words by Length (Using filter())
// Description:
//  Return only the words that have more than 4 characters.
// Sample Input:

/////OWN CODE==================

// let words = ["sun", "planet", "moon", "star", "galaxy"];
// let result = words.filter((arr) => arr.length > 4);
// console.log(result);

// 🧩 Task 13: Sum of Numbers (Using reduce())
// Description:
//  Find the sum of all numbers in the array using the reduce() method.
// Sample Input:

/////OWN CODE==================

// let numbers = [5, 10, 15, 20];
// let sum = numbers.reduce((acc, arr) => acc + arr);
// console.log(sum);



// 🧩 Task 14: Find First Negative Number (Using find())
// Description:
//  Find the first negative number from the array.
// Sample Input:

/////OWN CODE==================

// let arr = [4, 8, -3, 9, -6];
// let neBig = arr.find((acc, a) => -acc > a);
// console.log(neBig);

// 🧩 Task 15: Sort Objects by Age
// Description:
//  Sort the given array of objects in ascending order of age.
// Sample Input:

/////OWN CODE==================

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 30 },
// ];
// let ageAsc = users.sort((a, b) => a.age - b.age);
// console.log(ageAsc);

// 🧩 Task 16: Count Even and Odd Numbers (Using reduce())
// Description:
//  Return an object showing the count of even and odd numbers.
// Sample Input:

/////OWN CODE==================

// let nums = [1, 2, 3, 4, 5, 6, 7, 9, 13];

// let obj={odd:0,even:0}

// let b = nums.reduce(
//   (acc, n) => {
//     if (n % 2 == 0) {
//       acc.even++;
//     } else {
//       acc.odd++;
//     }

//     return acc;
//   },
//   obj
// );
// console.log(b);

//method-2

// let nums = [1, 2, 3, 4, 5, 6, 7, 9, 13];
// let obj = { even: 0, odd: 0 };
// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] % 2 == 0) {
//     obj.even++;
//   } else {
//     obj.odd++;
//   }
// }
// console.log(obj);

// 🧩 Task 17: Remove Falsy Values (Using filter())
// Description:
//  Remove null, undefined, false, 0, "", and NaN values from the array.
// Sample Input:

/////OWN CODE==================

// let arr = [0, "hello", false, 42, "", null, "JS", undefined];
// let ss = arr.filter((a) => {
//   if (true) {
//     return a;
//   }
// });
// console.log(ss);

// 🧩 Task 18: Capitalize Each Word (Using map())
// Description:
//  Capitalize the first letter of each word in an array.
// Sample Input:

/////OWN CODE==================

// let words = ["apple", "banana", "cherry"];
// let sum = words.map((a) => a[0].toUpperCase() + a.slice(1));
// console.log(sum);

// 🧩 Task 19: Group Numbers by Even/Odd
// Description:
//  Split the array into two arrays — one with even numbers and one with odd numbers.
// Sample Input:

// let numbers = [10, 15, 20, 25, 30];
// let Even = [];
// let Odd = [];

// let sum = numbers.map((a) => {
//   if (a % 2 == 0) {
//     Even.push(a);
//   } else {
//     Odd.push(a);
//   }
// });
// let out = `Even;[${Even}]
// Odd:[${Odd}]`;
// console.log(out);

// 🧩 Task 20: Find Average Marks (Using reduce())
// Description:
//  Given an array of student marks, find the average.
// Sample Input:

/////OWN CODE==================

// let marks = [75, 80, 90, 85];
// let len = marks.length;
// let out = marks.reduce((acc, n) => acc + n / len, 0);
// console.log(out);
