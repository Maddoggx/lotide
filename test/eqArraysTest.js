const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
// console.log(eqArrays);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

