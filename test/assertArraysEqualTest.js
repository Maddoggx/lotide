const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

const arr1 = [];
const arr2 = [5];
assertArraysEqual(eqArrays(arr1, arr2), false);