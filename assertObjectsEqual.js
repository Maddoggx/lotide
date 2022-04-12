const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key1 in object1) {
      if (object1[key1] !== object2[key1]) {
        return false;
      }
      return true;
    }
  }
  return false;
};

const assertObjectsEqual = function(object1, object2, expected) {
  const inspect = require('util').inspect; // requiring something form an outside library called 'util' and taking out the 'inspect' function.
  // assigning it to a veriable to use in my function.

  if (eqObjects(object1, object2) === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}}`);
    
  } else {

    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)}} !== ${inspect(object2)}`);

  }
  // 2 objects and an expected outcome
  // determine the equallity of those two objects
  // compare our expected outcome to the actual outcome.
  // conditional response based on that comparison.
};
  
  
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba, true);