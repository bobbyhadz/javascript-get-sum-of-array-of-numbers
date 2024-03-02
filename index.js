// EXAMPLE 1 - Get the Sum of an Array of Numbers in JavaScript

const arr = [5, 15, 45];

const sum = arr.reduce((accumulator, value) => {
  return accumulator + value;
}, 0);

console.log(sum); // 👉️ 65

// ------------------------------------------------------------------

// // EXAMPLE 2 - Creating a reusable function

// function calculateSum(array) {
//   return array.reduce((accumulator, value) => {
//     return accumulator + value;
//   }, 0);
// }

// const result1 = calculateSum([1, 2, 3]);
// console.log(result1); // 👉️ 6

// const result2 = calculateSum([1, 2, 3, 4]);
// console.log(result2); // 👉️ 10

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Sum of an Array of Numbers using a `for...of` loop

// const arr = [5, 15, 45];

// let sum = 0;

// for (const value of arr) {
//   sum += value;
// }

// console.log(sum); // 👉️ 65

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the Sum of an Array of Numbers using `Array.forEach()`

// const arr = [5, 15, 45];

// let sum = 0;

// arr.forEach(value => {
//   sum += value;
// });

// console.log(sum); // 👉️ 65

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the Sum of an Array of Numbers using a `for` loop

// const arr = [5, 15, 45];

// let sum = 0;

// for (let index = 0; index < arr.length; index++) {
//   sum += arr[index];
// }

// console.log(sum); // 👉️ 65

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get the Sum of an Array of Numbers using a `while` loop

// const arr = [5, 15, 45];

// let sum = 0;
// let i = -1;

// while (++i < arr.length) {
//   sum += arr[i];
// }

// console.log(sum); // 👉️ 65

// ------------------------------------------------------------------

// // EXAMPLE 7 - Get the Sum of an Array of Numbers using `lodash`

// import _ from 'lodash';

// console.log(_.sum([1, 2, 3])); // 👉️ 6

// console.log(_.sum([10, 20, 30])); // 👉️ 60
