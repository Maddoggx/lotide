const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }

};

// assertArraysEqual(eqArrays(arr1, arr2), false);



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



const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};
