const assertEqual = require('./assertEqual');
const head = (first) => {
  console.log(first[0]);
  return first[0];
};
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;