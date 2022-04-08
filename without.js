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

const arr1 = [2, 22, 222, 2];
const arr2 = [2, 22, 222, 2];

const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }

};

const without = (source, itemsToRemove) => {
  let arr3 = [];

  for (let item of source) {
    let safe = true;

    for (let remove of itemsToRemove) {
      if (item === remove) {
        safe = false;
      }

    }
    if (safe === true) {
      arr3.push(item);
    }

  }
  return arr3;
}
console.log(without(["8888", "56", "4"], [8888, 56, "4"]))
without(["8888", "56", "4"], [8888, 56, "4"])