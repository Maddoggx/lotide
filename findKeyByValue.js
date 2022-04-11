const assertEqual = function(actual, expected) {
  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
   
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }
};
const findKeyByValue = function(object, value) {
  return Object.keys(object).find(key => object[key] === value); // .find loops through an array and returns whatever value u put in.
  // .find(key (represents each key) => object[key] === value) - creates a var Key that represents the keys of the object
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
//console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama" === true);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);