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

// function minBy(array, iteratee) {
//   let computed;
//   let result;

//   for (const val of array) {
//     let output = iteratee(val);

//     if (output != null && (computed === undefined || output < computed)) {
//       computed = output;
//       result = val;
//     }
//   }

//   return result;
// }

// console.log(minBy([2, 3, 1, 4], (num) => num));
// console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.n));
// console.log(minBy([{ n: 1 }, { n: 2 }], (o) => o.m));

/* ============================================== ============================================== ==============================================*/

/* Implement a stack data structure in JavaScript that contains the following operations:

  new Stack(): Creates an instance of a Stack class that doesn't contain any items. The constructor does not accept any arguments.
  push(): Pushes an item onto the top of the stack and returns the new length of the stack. Required time complexity: O(1).
  pop(): Removes an item at the top of the stack and returns that item. Required time complexity: O(1).
  isEmpty(): Determines if the stack is empty. Required time complexity: O(1).
  peek(): Returns the item at the top of the stack without removing it from the stack. Required time complexity: O(1).
  length(): Returns the number of items in the stack. Required time complexity: O(1).

  const stack = new Stack();
  stack.isEmpty(); // true
  stack.push(1);
  stack.push(2);
  stack.length(); // 2
  stack.push(3);
  stack.peek(); // 3
  stack.pop(); // 3
  stack.isEmpty(); // false
   */

// class Stack {
//   #array = [];
//   constructor() {
//     this.#array = [];
//   }

//   isEmpty() {
//     return this.#array.length === 0;
//   }

//   push(val) {
//     this.#array.unshift(val);
//     return this.#array.length;
//   }

//   length() {
//     return this.#array.length;
//   }

//   peek() {
//     return this.#array[0];
//   }

//   pop() {
//     return this.#array.shift();
//   }
// }

// const stack = new Stack();

// console.log(stack);
// console.log(stack.isEmpty());
// stack.push(1);
// stack.push(2);
// console.log(stack.length());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.length());


/* ============================================== ============================================== ==============================================*/


/* 
Implement a function that takes one or more values and returns a function that cycles 
through those values each time it is called.

const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
 */

// function cycle(...values) {
//   return () => {
//     const top = values.shift();
//     values.push(top);
//     return top;
//   }
// }

// const onOffFn = cycle('on', 'off');
// console.log(onOffFn()); // "on"
// console.log(onOffFn()); // "off"
// console.log(onOffFn()); // "on"

/* ============================================== ============================================== ==============================================*/
