// function PrimeFunc(num) {
//     let res = [];

//     if (num < 2) {
//         return res;
//     }

//     const isPrime = (n) => {
//         if (n < 2) return false;
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) return false;
//         }
//         return true;
//     }

//     for (let i = 2; i < num; i++) {
//         if (isPrime(i)) {
//             res.push(i);
//         }
//     }

//     return res;
// }

// ============================================================================


// const CheckFunc = (arr1, arr2) => {

//     let obj1 = {}
//     let obj2 = {}

//     for (let i = 0; i < arr1.length; i++) {
//         const element = arr1[i]
//         if (element in obj1) {
//             obj1[element]++
//         } else {
//             obj1[element] = 1
//         }

//     }

//     for (let i = 0; i < arr2.length; i++) {
//         const element = arr2[i]
//         if (element in obj2) {
//             obj2[element]++
//         } else {
//             obj2[element] = 1
//         }

//     }


//     let keys1 = Object.keys(obj1)
//     let keys2 = Object.keys(obj2)



//     for (let i = 0; i < keys1.length; i++) {
//         if (keys2.includes(keys1[i])) {
//             if (obj1[keys1[i]] === 1) {
//                 return keys1[i]
//             }
//         }
//     }



//     console.log(keys1, keys2, obj1, obj2, 'TRTRT');
//     return null


// }
// // let samp = {'a':1}

// // console.log('a' in samp);


// let arr1 = [1, 3, 1, 3, 5, 6, 7, 99, 8, 5, 6, 7, 8, 4, 4]

// let arr2 = [2, 5, 2, 7, 5, 7, 8, 0, 8, 0, 6, 4, 7, 4, 99, 6]


// console.log(CheckFunc(arr1, arr2));

// =---------=========================================================================================

// const APIFunc = async () => {
//     let data = [];
//     try {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) {
//             return false;
//         }
        
//         const result = await response.json();
//         data = result.products;  
//     } catch (err) {
//         return new Error(err);
//     }

//     return data;
// }

// APIFunc().then(data => console.log(data.map((d,i)=>d.title))).catch(err => console.error(err));

// =====---------------------------------------------------------------------------------------------------

// const EvenFunc = (arr) => {

//     let array = arr
//     let res = []
//     if (arr.length < 1) {
//         return false
//     }

//     array.forEach(d => {
//         if (d % 2 === 0) {
//             res.push(d)
//         }
//     })

//     return res
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(EvenFunc(arr));


// ----------------------------------------------------------------------------
// const LargestElement = (arr) => {

//     let res = []

//     const flattenArray = (inputArray)=>{
//         if (Array.isArray(inputArray)){
//             inputArray.forEach((element)=>{
//                 flattenArray(element)
//             })
//         }else{
//             res.push(inputArray)
//         }
//     }
//     flattenArray(arr)

//     let temp = Math.max(...res)

//     return temp
// }

// const arr = [[1, 2, 3], [4, 5], [6, 7, [8, 9]]];

// console.log(LargestElement(arr));



// ===========================================================================

// const GetFactorial = (num) => {

//     if (num < 0) {
//         return `Then number ${num} cannot be negative`
//     }

//     let result = 1

//     for (let i = num; i > 0; i--) {
//         result *= i
//     }

//     return result



// }

// const GetFactorial = (num) => {

//     if (num < 0) {
//         return `Then number ${num} cannot be negative`
//     }

//     if (num === 0 || num === 1) {
//         return true
//     }

//     return num * GetFactorial(num - 1)

// }
// console.log(GetFactorial(9));


// =============================================================================================================

// const FibonacciIterations = (num)=>{

//     if(num <= 0){
//         return `Provide a positive number`
//     }
//     let sequence = [0]

//     if(num > 1){
//         sequence.push(1)
//     }
//     for (let i = 2; i < num; i++){
//         sequence.push(sequence[i - 1] + sequence[i - 2])
//     }
//     return sequence
// }

// let num = 13
// console.log(FibonacciIterations(num));


// =============================================================================================================


// const ChechFunc = (T, stringArray) => {

//     let res = []

//     for (let i = 0; i < T; i++) {

//         const [str1, str2] = stringArray[i]

//         if(str1.toLowerCase() === str2.toLowerCase()){
//             res.push('YES')
//         }else{
//             res.push('NO')

//         }

//     }
//     return res
// }





// let T = 3

// let stringArray = [['DelHi', 'delhI'], ['ChEnnAi', 'cheNNAi'], ['Goa', 'gOaaa']]

// console.log(ChechFunc(T, stringArray));


// ===========================================================================================


// function NumFunc(str) {

//     const string = str.split('')
//     let res = ''
//     for (let i = 0; i < string.length; i++) {

//         let count = 1;

//         while (string[i] === string[i + 1]) {
//             count++;
//             i++;

//         }
//         res = res + string[i] + count
//     }

//     return res


// }




// let string = 'aaabbcdddeeeea'

// console.log(NumFunc(string));


// ======================================================================


// const checkFunc = (arr, str, n) => {
//     let count = 0
//     for (let i = 0; i < arr.length; i++) {

//         if(arr[i] === str){
//             count++
//         }

//         if(count === n){
//             return i
//         }
//     }

// }



// let arr = ['bound', 'unbound', 'unbound', 'bound', 'unbound', 'unbound', 'bound', 'bound']
// let str = 'bound'
// let n = 4
// console.log(checkFunc(arr, str, n));



// ===============================================================================
// const Str = ['1', '2', '3', '4', '5']

// let temp = []
// Str.forEach(element => {
//     temp.push(parseFloat(element))
// })

// let res = Array.from(new Set(temp)).reduce((a, b) => a + b)


// console.log(res);



// // ===================================================================================



// const input = [
//     {
//         name: "Nithesh",
//         tech: ["HTML", "CSS", "JAVA", "JS"]
//     },
//     {
//         name: "hari",
//         tech: ["NodeJS", "CSS", "React", "JS"]
//     },
//     {
//         name: "sathish",
//         tech: ["Angular", "CSS", "React", "HTML"]
//     }
// ];


// const CheckFunc = (input) => {

//     let res = []
//     for (let i = 0; i < input.length; i++) {
//         input[i].tech.forEach(element => {
//             if (!res.includes(element)) {
//                 res.push(element)
//             }
//         })
//     }
//     return res
// }


// console.log(CheckFunc(input));



// ====================================================================================================


// const input = [
//     {
//       name: "Nithesh",
//       tech: ["HTML", "CSS", "JAVA", "JS"]
//     },
//     {
//       name: "hari",
//       tech: ["NodeJS", "CSS", "React", "JS"]
//     },
//     {
//       name: "sathish",
//       tech: ["Angular", "CSS", "React", "HTML"]
//     }
//   ];

  


// const result = [...new Set(input.flatMap(element => element.tech))]

// console.log(result);


// ========================================================================================

// const Func = (str) => {
//     let string = str.split('')
//     let last_index = string.length - 1
//     for (let i = 0; i < string.length / 2; i++) {
//         console.log('hii', string[i]);
//         let temp = string[i]
//         string[i] = string[last_index]
//         string[last_index] = temp
//         last_index--;

//     }
//     return string

// }

// console.log(Func('karan').join(''));


// ========================================================================


// cache locally

// const createCache = () => {
//     const cache = {};

//     return {
//         set: (key, value) => {
//             cache[key] = value;
//         },
//         get: (key) => {
//             return cache[key];
//         },
//         has: (key) => {
//             return cache.hasOwnProperty(key);
//         },
//         delete: (key) => {
//             delete cache[key];
//         },
//         clear: () => {
//             for (let key in cache) {
//                 if (cache.hasOwnProperty(key)) {
//                     delete cache[key];
//                 }
//             }
//         }
//     };
// }

// // Usage example
// const cache = createCache();

// cache.set('a', 1);
// console.log(cache.get('a'));  // Output: 1
// console.log(cache.has('a'));  // Output: true
// cache.delete('a');
// console.log(cache.has('a'));  // Output: false
// cache.clear();


// =====================================================================



// function snail(array) {
//     const result = [];
//     while (array.length) {
//         // Take the top row
//         result.push(...array.shift());
//         // Take the right column
//         for (const row of array) {
//             result.push(row.pop());
//         }
//         // Take the bottom row in reverse order
//         if (array.length) {
//             result.push(...array.pop().reverse());
//         }
//         // Take the left column in reverse order
//         for (let i = array.length - 1; i >= 0; i--) {
//             result.push(array[i].shift());
//         }
//     }
//     return result;
// }

// // Example usage:
// const array = [
//     [1, 2, 3, 4],
//     [8, 9, 4, 5],
//     [7, 6, 5, 9]
// ];
// console.log(snail(array)); // Output: [1, 2, 3, 4, 5, 9, 5, 6, 7, 8, 9, 4]


// =============================================================================

// function permutations(string) {
//     let results = [];

//     if (string.length === 1) {
//         return [string];
//     }

//     for (let i = 0; i < string.length; i++) {
//         let char = string[i];

//         // Avoid duplicate permutations for strings with duplicate characters
//         if (string.indexOf(char) !== i) continue;

//         let remainingString = string.slice(0, i) + string.slice(i + 1);

//         for (let subPermutation of permutations(remainingString)) {
//             results.push(char + subPermutation);
//         }
//     }

//     return results;
// }

// let text = 'aabb';
// console.log(permutations(text));


// ====================================================================================



// function toCamelCase(str) {
//     if(!str.length){
//        return ''
//     }
//    let words = str.split(/[-_]/)
//    let res = words[0]
//     for(let i = 1 ; i < words.length;i++){
//     res += words[i].charAt(0).toUpperCase()+words[i].slice(1)
//     }
//     return res
//    }
   
//    // Example usage:
//    console.log(toCamelCase('the-stealth-warrior')); // Output: "theStealthWarrior"
//    console.log(toCamelCase('The_Stealth_Warrior')); // Output: "TheStealthWarrior"
//    console.log(toCamelCase('The_Stealth-Warrior')); // Output: "TheStealthWarrior"
//    console.log(toCamelCase('')); // Output: ""
   
// =========================================================================================



// const post = {
//     title: 'Food Of Bangalore',
//     caption: 'Hello, explore the best food of bangalore at Sheraton Hotel.',
//     images: ['', ''],
//     created_at: 1652069177530,
//     created_by: {
//         name: 'Goutam',
//         contact: '+919999999999',
//         email: 'goutam@goutambseervi.tech',
//         features: {
//             insta_groups: {
//                 ramp: 10,
//                 exclude: ['__razorpay__']
//             }
//         }
//     }
// };

// const key = 'created_by.features.insta_groups'

// function Func(obj, key) {


// method : 1====================================
// let str = key.split('.')

// return str.reduce((a,b)=>  a && a[b] , obj)



// method:2=====================================
// if (obj.hasOwnProperty(key)) {
//     return obj[key]
// }

// for (let k in obj) {
//     if (obj[k] && typeof obj[k] === 'object') {
//         let result = Func(obj[k], key)

//         if (result !== undefined) {
//             return result;
//         }
//     }
// }

// return undefined



// }

// console.log(Func(post, key));


// =====================================================



// function CheckConsecutive(num) {

//     let res = 0;
//     let temp = 0;

//     let int = num.split('')
//     for (let i = 0; i < num.length; i++) {
//         if (int[i] === '1') {
//             temp++;
//         } else {
//             temp = 0
//         }
//         if (temp > res){
//             res = temp
//         }
//     }

//     return res
// }

// const num = '1100111100011111111011'

// console.log(CheckConsecutive(num));



// ============================================================

// function func(num, k) {
    //     let left = -1;
    //     let maxLen = 0;
    //     let zeroCount = 0;
    //     let a = num.split("");
    
    //     for (let right = 0; right < a.length; right++) {
    //         if (a[right] === '0') {
    //             zeroCount++;
    //         }
    //         // console.log(zeroCount, 'ZERO');
    //         while (zeroCount > k) {
    //         // console.log(zeroCount, 'ZERO-----');
    //             if (a[left] === '0') {
    //                 zeroCount--;
    //             }
    //             left++;
    //         }
    //         // console.log(right, 'RIGHT');
    //         if (maxLen < right - left ) {
    //             // console.log(maxLen, right, left, 'RESSSS');
    //             maxLen = right - left 
    //         }
    //     }
    //     console.log(maxLen);
    // }
    
    // let num = "1110011100011";
    // let k = 2;
    // func(num, k);



    // =====================================================================



    

// const data = {
//     "A": "T",
//     "T": "A",
//     "C": "G",
//     "G": "C",
// }

// function Check(str) {

//     let res = ''

//     for (let t of str) {
//         if (t in data) {
//             res += data[t]
//         } else {
//             res += t
//         }
//     }
//     return res
// }

// let str = 'ATSTGC'
// console.log(Check(str));

//=======================================================================================


// let arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]


// function Check(arr) {
//     if (arr.indexOf('needle') === -1) {
//         return res = `Your function didn't return anything`
//     } else {
//         return res = `found the needle at position ${arr.indexOf('needle')}`
//     }
// }

// console.log(Check(arr));



// ===================================================================================




// function ChechFunc(str) {

//     let text = str.split('')

//     let res = []

//     for (let i = 0; i < str.length; i++) {
//         let temp = text[i].repeat(i + 1)
//         temp = temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase()
//         res.push(temp)
//     }
//     return res.join('-')
// }

// let str = "abcd"
// console.log(ChechFunc(str));





// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// // accum("cwAt") -> "C-Ww-Aaa-Tttt"



// ===================================================================================

// function CheckFunc(num) {
//     let cost = 40
//     if(num <=0){
//         return num
//     }

//     if (num >= 3 && num <= 6) {
//         return num * cost - 20
//     }

//     if (num >= 7) {
//         return num * cost - 50
//     }

//     return cost * num

// }
// let num = 2
// console.log(CheckFunc(num));


// =================================================================================

// function CheckFunc(arr, num) {
//     let obj = {}
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!(arr[i] in obj)) {
//             obj[arr[i]] = 0
//         }
//         obj[arr[i]]++
//         if (obj[arr[i]] <= num) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// let arr = [1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 7, 2, 2, 2, 2]
// let num = 3
// // output = [1, 1, 3, 3, 7, 2, 2, 2]

// console.log(CheckFunc(arr, num));