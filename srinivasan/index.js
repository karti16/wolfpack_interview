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



// =========================================================================

// // Function to get the numerical value of a letter
// function getLetterValue(letter) {
//     const lowerCaseLetter = letter.toLowerCase();
//     return lowerCaseLetter.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
// }


// function CheckFunc(sentence) {

//     let words = sentence.split(' ')
//     console.log(words);
//     let res = 0
//     let temp = 0
//     let output = ''

//     for (let w of words) {
//         let s = w.split('')
//         s.forEach(element => {
//             temp += getLetterValue(element)
//         });

//         if (temp > res) {
//             res = temp;
//             output = w
//         }
//         temp = 0
//     }
//     return output
// }

// // let sentence = 'man i need a taxi up to ubud'
// // let sentence = 'take me to semynak'
// let sentence = 'what time are we climbing up the volcano'
// console.log(CheckFunc(sentence));


// ==================================================================================

// let num = 104033;

// function CheckFunc(num) {
//     let output = [];
//     const func = (n) => {
//         let temp = n.toString().split('');
//         for (let i = 1; i < temp.length; i++) {
//             temp[i] = '0';
//         }
//         return parseInt(temp.join(''));
//     }
//     while (num > 0) {
//         let part = func(num);
//         output.push(part);
//         num -= part;
//     }

//     return output.join(' + ');
// }

// console.log(CheckFunc(num)); 

// ========================================================================================





// function ChechFunc(words) {
//     let res = []
//     const reverseFunction = (word) => {
//         let last_index = word.length - 1
//         let str = word.split('')
//         for (let i = 0; i < word.length / 2; i++) {
//             let temp = str[i]
//             str[i] = str[last_index]
//             str[last_index] = temp
//             last_index--
//         }
//         return str.join('')
//     }

//     let splittedWords = words.split(' ')

//     for (let w of splittedWords) {
//         if (w.length >= 5) {
//             let d = reverseFunction(w)
//             res.push(d)
//         } else {
//             res.push(w)
//         }
//     }
//     return res.join(' ')
// }


// console.log(ChechFunc("Hey fellow warriors"));
// console.log(ChechFunc("This is a test"));
// console.log(ChechFunc("This is another test"));




// ================================================================================



// function CheckRepetition(str) {
//     if (str.length === 0) {
//         return false;
//     }

//     let res = '';
//     let letters = str.toLowerCase().split('');
//     let obj = {};

//     for (let letter of letters) {
//         if (!(letter in obj)) {
//             obj[letter] = 1;
//         } else {
//             obj[letter] += 1;
//         }
//     }
//     for (let letter of letters) {
//         if (obj[letter] > 1) {
//             res += ')';
//         } else {
//             res += '(';
//         }
//     }

//     return res;
// }

// let str = "Success";
// console.log(CheckRepetition(str)); // Output: ")())())"


// // The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// // Examples
// // "din"      =>  "((("
// // "recede"   =>  "()()()"
// // "Success"  =>  ")())())"
// // "(( @"     =>  "))(("
// // Notes
// // Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// // STRINGSARRAYS



// =======================================================================



// function firstNonRepeatingChar(str) {
//     let charCount = {};

//     let lowerStr = str.toLowerCase();

//     for (let char of lowerStr) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
//     console.log(charCount, 'RTRTRTRT');

//     for (let char of lowerStr) {
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }

//     return null; // Return null if no non-repeating character is found
// }

// console.log(firstNonRepeatingChar('rvtt')); // Output: "r"
// // console.log(firstNonRepeatingChar('Success')); // Output: "u"
// // console.log(firstNonRepeatingChar('aabbcc')); // Output: null

// ======================================================================================



// function Func(arr1, arr2) {
//     let res = []
//     const func = (num1, num2) => {
//         return num1 * num1 === num2
//     }
//     for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
//         let temp = func(arr1[i], arr2[i])
//         res.push(temp)
//     }
//     return res.every(s => s === true)
// }



// let arr1 = [11, 12, 13, 14, 15, 16, 17, 18]
// let arr2 = [121, 144, 169, 196, 225, 256, 289, 324]


// console.log(Func(arr1, arr2));


// ===========================================================================


// function lengthOfLongestSubstring(s) {
//     let n = s.length;
//     let set = new Set()
//     let maxLength = 0
//     let left = 0
//     let count = 0

//     for (let right = 0; right < n; right++) {
//         while (set.has(s[right])) {
//             set.delete(s[left]);
//             left++
//         }
//         console.log(left, 'llllll');
//         set.add(s[right]);
//         maxLength = Math.max(maxLength, right - left + 1)
//     }

//     return maxLength
// }

// let str = "abccabcbb";
// console.log(lengthOfLongestSubstring(str)); // Output: 3



// Method 2


// function checkFunc(str) {

//     let n = str.length
//     let maxLength = 0
//     let res = []

//     for (let i = 0; i < n; i++) {
//         while (res.includes(str[i])) {
//             res.shift()
//         }
//         res.push(str[i])
//         maxLength = Math.max(maxLength, res.length)
//     }

//     return maxLength;
// }

// let str = "abcabcbb"
// console.log(checkFunc(str));



// ============================================================


// String.prototype.Capitalise = function (str) {
//     let words = this.split(' ')
//     console.log(words);
//     let res = []

//     for (let word of words) {
//         let part = word.charAt(0).toUpperCase() + word.slice(1)
//         res.push(part)
//     }
//     return res.join(' ')
// }
// let str = "How can mirrors be real if our eyes aren't real"

// console.log(str.Capitalise());



// ===================================================================



// function Check(str) {
//     let res = {}
//     let d = 0

//     let converted = str.toLowerCase()

//     for (let e of converted) {
//         res[e] = (res[e] || 0) + 1
//     }

//     Object.keys(res).forEach(element => {
//         if (res[element] > 1) {
//             d++
//         }
//     });
//     return d
// }

// let str = 'Indivisibilities'

// console.log(Check(str));

// // "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice




// ================================================================================



// function persistence(num) {
    //     let res = num
    //     const func = (temp) => {
    //         let tem = temp.toString().split('')
    //         let t = 1
    //         for (let n of tem) {
    //             t *= parseInt(n)
    //         }
    //         return t
    //     }
    //     while (res > 10) {
    
    //         res = func(res)
    //     }
    //     return res
    // }
    
    
    // console.log(persistence(39));



    // ================================================================\


    // function persistence(num) {
    //     let count = 0;
    
    //     while (num > 10) {
    //         num = num.toString().split('').reduce((a, b) => a * b);
    //         count++;
    //     }
    
    //     return count;
    
    // }
    
    // let num = 999
    // console.log(num.toString().split('').reduce((a, b) => a * b));
    
    
    // console.log(persistence(100));
    


    // ========================================================================================



    // function Func(num) {

    //     for (let n of num) {
    //         if (n > 9) {
    //             return false
    //         }
    //     }
    
    //     let part1 = ''
    //     let part2 = ''
    //     let part3 = ''
    
    
    //     for (let i = 0; i < num.length; i++) {
    //         if (i < 3) {
    //             part1 += num[i]
    //         }
    //         if (i >= 3 && i < 6) {
    //             part2 += num[i]
    //         }
    
    //         if (i >= 6) {
    //             part3 += num[i]
    //         }
    //     }
    //     return `(${part1}) ${part2}-${part3}`
    // }
    
    
    // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    
    // console.log(Func(numbers));
    
    // // => returns "(123) 456-7890"
    
    // let format = "(ccc) ccc-cccc";
    
    // for (var i = 0; i < numbers.length; i++) {
    //     format = format.replace('c', numbers[i]);
    // }
    
    //  console.log(format);;




    // ============================================================================


    // function Check(arr, k) {

    //     let res = []
    
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = i + 1; j < arr.length; j++) {
    //             while (arr[i] + arr[j] === k) {
    //                 return [i + 1, j + 1]
    //             }
    //         }
    //     }
        
    //     return res
    // }
    
    
    // let arr = [2, 7, 11, 15]
    // let k = 4444
    // console.log(Check(arr, k));


    // ==================================================================



    // function Func(arr, k) {

    //     let target = arr.length - k
    
    //     let rotatedPart = arr.slice(0, target);
    //     let remainingPart = arr.slice(target, arr.length );
        
    //     return remainingPart.concat(rotatedPart);
    // }
    
    // let num = [1, 2, 3, 4, 5, 6, 7];
    // let target = 3;
    
    // console.log(Func(num, target)); // Output: [3, 4, 5, 6, 7, 1, 2]
    

    // ====================================================================================



    // let arr = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
// console.log(CheckFunc(arr)); 
// // Output: "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


// ===============================================================================================================




// function CheckFunc(arr) {
//     let words = arr.split(' ')
//     let obj = {}
//     let res = []

//     let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
//     for (let w of words) {
//         let temp = w.split('')
//         for (let f of temp) {
//             if (numbers.includes(f) ){
//                 obj[f] = w
//             }
//         }
//     }
//     for(let f in obj){
//         res.push(obj[f])
//     }
//     return res.join(' ')
// }

// let arr = "4of Fo1r pe6ople g3ood th5e the2"
// console.log(CheckFunc(arr));
// ---------------------------------------------------------------------------------

// function CheckFunc(arr) {
//     let words = arr.split(' ')
//     let obj = {}
//     let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
//     for (let w of words) {
//         let temp = w.split('')
//         for (let f of temp) {
//             if (numbers.includes(f) ){
//                 obj[f] = w
//             }
//         }
//     }
//     return Object.values(obj).join(' ')
// }

// let arr = "4of Fo1r pe6ople g3ood th5e the2"
// console.log(CheckFunc(arr));



// // Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// // Examples
// // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// // ""  -->  ""



// ==================================================================================================





// function CheckFunc(arr) {
//     // Regular expression for matching valid smiley faces
//     const smileyPattern = [':)', ':D', ';)', ';D', ':-)', ':-D', ';-)', ';-D', ':~)', ':~D', ';~)', ';~D']

//     let count = 0;

//     for (let face of arr) {
//         if (smileyPattern.includes(face)) {
//             count += 1;
//         }
//     }

//     return count;
// }


// let arr = [';]', ':[', ';*', ':$', ';-D']

// console.log(CheckFunc(arr));



// // Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// // Rules for a smiling face:

// // Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// // A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// // Every smiling face must have a smiling mouth that should be marked with either ) or D
// // No additional characters are allowed except for those mentioned.

// // Valid smiley face examples: :) :D ;-D :~)
// // Invalid smiley faces: ;( :> :} :]

// // Example
// // countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// // countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// // countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// // Note
// // In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.







// ==========================================================================================

// function validatePIN(pin) {
   
//     if (arr.length !== 4 && arr.length !== 6) {
//         return false
//     }
//     let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
//     for(let n of arr){
//         if(!(number.includes(n))){
//             return false
//         }
//     }

//     return true
// }


// console.log(validatePIN("1234"));  

// ========================================================================================



// function CheckFunc(arr) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr.slice(0, i).reduce((a, b) => a + b, 0) === arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0)) {
//             return i
//         }
//     }
//     return -1
// }

// let arr = [10, -80, 10, 10, 15, 35, 20]
// console.log(CheckFunc(arr));


// // You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// // If there is no index that would make this happen, return -1.

// // For example:
// // Let's say you are given the array {1,2,3,4,3,2,1}:
// // Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// // Let's look at another one.
// // You are given the array {1,100,50,-51,1,1}:
// // Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// // Last one:
// // You are given the array {20,10,-80,10,10,15,35}
// // At index 0 the left side is {}
// // The right side is {10,-80,10,10,15,35}
// // They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// // Index 0 is the place where the left side and right side are equal.

// // Note: Please remember that in most languages the index of an array starts at 0.

// // Input
// // An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// // Output
// // The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// // Note
// // If you are given an array with multiple answers, return the lowest correct index.\



// ===========================================================================================================================



// function CheckFunc(num) {

//     if (num < 1) {
//         return 0
//     }
//     let res = 0
//     for (let i = 1; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             res += i
//         }
        
//     }
//     return res

// }

// let num = 10

// console.log(CheckFunc(num));

// // If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// // Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// // Additionally, if the number is negative, return 0.

// // Note: If the number is a multiple of both 3 and 5, only count it once.

// // Courtesy of projecteuler.net (Problem 1)



// ===================================================================================


// Find the First Non-Repeated Character.



// function CheckFunc(str) {
//     console.log(str);

//     let string = str.toLowerCase().split('')
//     if (!string.length) {
//         return ''
//     }
//     let obj = {}

//     for (let i = 0; i < string.length; i++) {
//         obj[string[i]] = (obj[string[i]] || 0) + 1
//     }

//     for (let l of string) {
//         if (obj[l] === 1) {
//             return l
//         }
//     }

//     return 'No non-repeating letters'
// }

// let string = 'abcdabcd'

// console.log(CheckFunc(string));