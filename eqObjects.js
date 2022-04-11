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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
   
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqArrays(eqObjects(ab, ba))); // => true
// assertEqual(eqObjects(ab, abc)); // => false
