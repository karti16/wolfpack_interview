// Q: 1
/* Implement a function makeCounter that accepts an optional integer 
value and returns a function. When the returned function is called 
initially, it returns the initial value if provided, otherwise 0. 
The returned function can be called repeatedly to return 
1 more than the return value of the previous invocation. 

const counter = makeCounter();
counter(); // 0
counter(); // 1
counter(); // 2

const counter = makeCounter(5);
counter(); // 5
counter(); // 6
counter(); // 7

*/

// function makeCounter(initialValue = 0) {
//   return () => console.log(initialValue++);
// }

// const counter = makeCounter(0);
// counter(); // 0
// counter(); // 1
// counter(); // 2

/* =============================================== ============================================= ==============================================*/

/* mplement a function mean(array) that returns the mean (also known as average) 
of the values inside array, which is an array of numbers. 

mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667
*/

// function mean(arr){
//   const sum = arr.reduce((a,c) => a + c, 0);
//   return sum / arr.length;
// }

// console.log(mean([1, 2, 3, 4]));

/* ============================================== ============================================== ==============================================*/

/*  
Implement a function minBy(array, iteratee) that finds the element inside array with the minimum value after going through iteratee.
Arguments

    array (Array): The array to iterate over.
    iteratee (Function): The iteratee invoked per element, which is a function that accepts one argument: (value).


minBy([2, 3, 1, 4], (num) => num); // => 1
minBy([{ n: 1 }, { n: 2 }], (o) => o.n); // => { n: 1 }

The function should ignore elements where iteratee produces null or undefined.
minBy([{ n: 1 }, { n: 2 }], (o) => o.m); // => undefined

*/

function minBy(array, iteratee) {
  let computed;
  let result;

  for (const val of array) {
    let output = iteratee(val);

    if (output != null && (computed === undefined || output < computed)) {
      computed = output;
      result = val;
    }
  }

  return result;
}

console.log(minBy([2, 3, 1, 4], (num) => num));
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n));
console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.m));
