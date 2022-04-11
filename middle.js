const eqArrays = function(arrOne, arrTwo) {
  console.log(arrOne);
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let e = 0; e < arrOne.length; e++) {

    if (arrOne[e] !== arrTwo[e]) {
      return false;

    }

  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);

  } else {
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

  }

};

const middle = (arr1) => {
  if (arr1.length === 1 || arr1.length === 2) { //
    //
    return [];
  }
  if (arr1.length % 2 === 1) { // looking for an odd number
    let index = Math.floor(arr1.length / 2); // rounding #'s using Math.Floor
    //
    return [arr1[index]]; // returns middle elements index
  }
  if (arr1.length % 2 === 0) { // looking for an even number
    let index2 = arr1.length / 2; // how to get the higher middle index.
    let index1 = index2 - 1; // how to get the lower middle index
    return [arr1[index1], arr1[index2]];
  }
};


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);