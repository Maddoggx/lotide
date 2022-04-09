const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===  ${expected}`);
    // console.log("Assertion Passed: " + actual + " === " + expected);
  } else {
    console.log(` 🛑🛑🛑 Assertion Failed ${actual} !== ${expected} `);

    // console.log("Assertion Failed: " +  actual + " !== " + expected);
  }

};



//function to count the letters in a string
const countLetters = (string) => {
  const result = {};
  for (const char of string) {
    if (char !== ' ') {
      
      if (result[char] >= 1) {
        result[char] = result[char] + 1;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
  
};
  
console.log(countLetters("Shrek is the best man ever"));