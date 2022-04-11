const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

  }

};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));
/*
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(Objects(cd, cd2)); // => false
{
  for (let key1 in object1) {
    for (let key2 in object2) {
      if (key1 === key2) {
        return true;
      } else {
        if (key1 !== key2) {

          return false;
        }
      }
    }
  }

};


*/
