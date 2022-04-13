const assertEqual = require('./assertEqual');
// both arrays must be the same length
// both arrays must have the same elements in the same order
// const eqArrays = require('../eqArrays');

const eqArrays = function(arrOne, arrTwo) {
  //console.log(arrOne, arrTwo);
  for (let e = 0; e < arrOne.length; e++) {
    //console.log(arrOne[e]);

    if (arrOne[e] === arrTwo[e]) {
      return true;
    } else {
      return false;
    }

  }
};

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

module.exports = eqArrays;