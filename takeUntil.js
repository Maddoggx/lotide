const takeUntil = function(array, callback) {
  for (let item of array) {
    // callback(item);
    if (callback(item) === true) {
      let index = array.indexOf(item);
      // console.log(index);
      return array.slice(0, index);  // .slice() takes in a start and an end value.
    
    }


  }
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const myThing = (x) => { return x > 5;}; 
const results1 = takeUntil(data1, x => x < 0); // annonymous funtion x => x < 0
console.log(results1);

// callBack is just a value you pass into another function. *they generally have the syntax of an annonymous function.