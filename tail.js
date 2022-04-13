const assertEqual = function(actual, expected) {
  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    
  } else {
   
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);
  }

};
const tail = (arr) => {
  return arr.slice(1);
};
/*
const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(words);
 // no need to capture the return value since we are not checking it
assertEqual(result.length, 2); // original array should still have 3 element
console.log(result);
*/

const colour = ["blue", "yellow", "green", "red"];
const resultOne = tail(colour);

//console.log(resultOne);
//assertEqual(resultOne.length, 3);

module.exports = tail;