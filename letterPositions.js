const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }

};
const eqArrays = function (arrOne, arrTwo) {
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

const letterPositions = function (sentence) {
  const results = {};
  let index = 0;
  // loop through the sentence string
  for (let i = 0; i < sentence.length; i++) {

    if (results[sentence[i]] === undefined) {
      results[sentence[i]] = [index];
    } else if (sentence[i] === ' ') {
      index++;

    } else {
      results[sentence[i]].push(index);
    }
    index++;
  }
  return results;
};
console.log(letterPositions("Lighouse in the house"));
assertArraysEqual(eqArrays(letterPositions("Hello").e, [1]), true);
// trying to map each letter to a number in an object.
// results[sentence[i]] = [index];
// increments the value by 1 each time it pushes a value to the obj.

  // console.log(results);
// console.log(letterPositions("hello").j)
