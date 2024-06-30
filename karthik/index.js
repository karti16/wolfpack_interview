// const obj = {}

// obj['a'] = 'aaa';
// obj['c'] = 'ccc';
// obj['b'] = 'bbb';

// console.log(obj); // { a: 'aaa', c: 'ccc', b: 'bbb' }

// ----------------------------------------

// const obj1 = {
//     '45':'4545',
//     '1': '1010',
//     '5':'454',
//     '111':'1111'
// }

// obj1['5'] = '555';
// obj1['2'] = '222';
// obj1['1'] = '111';

// console.log(obj1); // { '1': '111', '2': '222', '5': '555' }



// function sortByNumber(str) {
//   if (str === '') return str;
  
//   const arr = str.split(' ');
//   const obj = {};

//   for(let ele of arr){
//     const num = ele.split('').filter(i => !isNaN(i))
//     console.log(num);
//     obj[num] = ele;
//   }

//   return Object.values(obj).join(' ');
// }

// console.log(sortByNumber('4of Fo1r pe6ople g3ood th5e the2'));

// function print() {
//   console.log('tick...');
// }

// const throttledPrint = throttle(print, 3000);

// setInterval(throttledPrint, 1000);

// function throttle(fn, delay) {
//   let timer = null;
//   return () => {
//     if (timer === null) {
//       fn();
//       timer = setTimeout(() => {
//         timer = null;
//       }, delay);
//     }
//   };
// }
