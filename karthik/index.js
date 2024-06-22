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

/* ============================================== */


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

/* ============================================== */
