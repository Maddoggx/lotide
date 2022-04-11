const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }

};

// takes in an object and a callback.
// it should scan the object and return the first key for which the callback returns a truthy value.
// if no key is found then it should return undefined.
const findKey = function(object, callback) {
  for (let key in object) { // foor.. in loop to loop through keys of object.
    // console.log(key);
    if (callback(object[key])) {
      //console.log(key);
      return key;
    }
    // return undefined;
  }
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3));