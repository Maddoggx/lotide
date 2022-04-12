const tail = require('../tail');
const assertEqual = require('../assertEqual');

const colour = ["blue", "yellow", "green", "red"];
const resultOne = tail(colour);

console.log(resultOne);
assertEqual(resultOne.length, 3);