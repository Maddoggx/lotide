const eqArrays = function (arrOne, arrTwo) {
  //console.log(arrOne, arrTwo);
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  for (let e = 0; e < arrOne.length; e++) {
    //console.log(arrOne[e]);
    
    if (arrOne[e] !== arrTwo[e]) {
      return false;
    
    }
    
  }
  return true;
};

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.

const arr1 = [];
const arr2 = [5];
const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }

};
/*
Our map function will take in two arguments:

 - An array to map
 - A callback function

The map function will return a new array based on the results of the callback function.
*/

const kpopGroups = ["WJSN", "Loona", "VIVIZ", "Kep1er", "Hyolyn", "Brave Girls"];
const map = function(arr, cb) {
  const results = [];
  for (let item of arr) {
    results.push(cb(item));

  }
  
  return results;
}
const results1 = map(kpopGroups, kpop => kpop[0]);
console.log(results1);
