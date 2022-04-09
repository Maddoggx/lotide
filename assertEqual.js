// Template literal example
const assertEqual = (actual, expected) => {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
        // console.log("Assertion Passed: " + actual + " === " + expected);
    } else {
        console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

        // console.log("Assertion Failed: " +  actual + " !== " + expected);
    }

};

assertEqual("Lghthouse Labs", "Bootcamp");
assertEqual(1, 1);

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed: " + actual + " === " + expected);
  }else{
    console.log("Assertion Failed: " +  actual + " !== " + expected);
  }

};

*/