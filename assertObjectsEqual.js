const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
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

assertObjectsEqual(ab, ba);
assertObjectsEqual();
assertObjectsEqual();
//console.log(assertObjectsEqual());
/*
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let objectsEqual = eqObjects(actual, expected);

  let result = "";
  if (objectsEqual) {
    result += `✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    result += `🔴Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
  return result;
};
*/
