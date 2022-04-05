 const assertEqual = function(actual, expected) {
  if (actual === expected) {
   
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
   
   console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }

};
/*
assertEqual("Lghthouse Labs", "Bootcamp");
assertEqual(1, 1);

*/

const head = (first) => {
  console.log(first[0]);
 return first[0]; 
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); 
