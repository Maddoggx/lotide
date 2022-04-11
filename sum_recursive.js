// write a for loop program that prints all even numbers from 0 to 12
/*
- this for loop with loop through till it is equal to or greater than 12, counting up in 2's.
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}
*/

function sumToOne(n) {
  if (n === 1) {
    return 1;
  }

  return n + sumToOne(n - 1);
};

console.log(sumToOne(6));