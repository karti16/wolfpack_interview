let arr =['bound','unbound','unbound','bound','unbound','unbound','bound','bound']

let number = 2

let str = 'bound'

function find(arr,num,string){
    let count  = 0;
    
    for(let i =0;i <arr.length;i++){
        if(arr[i] === string){
            count++;
            
        }
        
        if(count === number){
            return i
        }
        
    }
    
}

// const result = arr.indexOf('unbound')

console.log(find(arr,number,str))


//////

let str = "aaabbcdddeeeea";

function merge(str){
let convert = str.split("");
let res = ''
for(let i =0;i<convert.length;i++){

   let count = 1
   while(convert[i] === convert[i+1]){
       count++ ;
       i++
   }
   res += convert[i] + count
}
    return res
}
// 1 ---> Fizz Buzz Implementation

// Qus : Given an integer n, for every integer i <= n, the task is to print “FizzBuzz” if i is divisible by 3 and 5, “Fizz” if i is divisible by 3, “Buzz” if i is divisible by 5 or i (as a string) if none of the conditions are true.


// Ans :

for(let i=0;i <=50;i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuss")
    }
    else if(i % 3 === 0){
        console.log('fizz')
        
    }
    else if(i % 5 === 0){
        console.log('buss')
    }
    else {
        console.log('')
    }
}


//
// 2 ====> reverse a String in without using reverse function method


function reverseString(str){
    let finalData = ''
    
    for(i = str.length - 1;i >= 0;i--){
        finalData += str[i]
    }
    console.log('ssssdd',finalData)
    return finalData
}

console.log('ssssdd',reverseString('Hari'))

//
// 3 ===> Fibbonacci series -
// Ans ===> 

function fibbonociSeries(){
    let finalValue = [0,1]
    
    for(let i = 2;i < 10;i++){
        finalValue[i] = finalValue[i -1] + finalValue[i -2]
    }
    return finalValue
}

console.log(fibbonociSeries())

//
//const dataa = parseInt(prompt('Enter a number'))    ---> using browser input type

// https://www.edureka.co/blog/interview-questions/react-interview-questions/

//
// 4 =====> remove duplicate array value

var abc =  ["a","b","c","d","e","a","b","f"]

console.log(...new Set(abc))

// 5======> Rest function

let ab =[1,2,3,4,5]

function array(b,...a) {
    console.log(a)
}
array(6,7,8,0)
console.log("Welcome to Programiz!");



// 6========> find the values
var a = 10;

{
    var a = -10
}
let b = a;

{
    let b = -20
}


console.log(b);

//
// 25    ====>   

const data = [
  { id: 1, category: "A", value: 10 },
  { id: 2, category: "B", value: 20 },
  { id: 3, category: "A", value: 30 },
  { id: 4, category: "C", value: 40 },
  { id: 5, category: "B", value: 50 }
];

const groupedData = data.reduce((acc, obj) => {
  const key = obj.category;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(obj);
  return acc;
}, {});

console.log(groupedData);


//

const post = {
  title: 'Food Of Bangalore',
  caption: 'Hello, explore the best food of bangalore at Sheraton Hotel.',
  images: ['', ''],
  created_at: 1652069177530,
  created_by: {
    name: 'Goutam',
    contact: '+919999999999',
    email: 'goutam@goutambseervi.tech',
    features: {
      insta_groups: {
        ramp: 10,
        exclude: ['__razorpay__']
      }
    }
  }
};

const groups = path(post, 'created_by.features.insta_groups');
console.log(groups);


///


// 4 ===> 

const input = [
  {
    name: "Nithesh",
    tech: ["HTML", "CSS", "JAVA", "JS"]
  },
  {
    name: "hari",
    tech: ["NodeJS", "CSS", "React", "JS"]
  },
  {
    name: "sathish",
    tech: ["Angular", "CSS", "React", "HTML"]
  }
];

const uniqueTechnologies = [...new Set(input.flatMap(person => person.tech))];

console.log(uniqueTechnologies);



/////with out using Reduce

let data = [
  { key: "Sample1", data: "Data1" },
  { key: "Sample1", data: "Data1" },
  { key: "Sample1", data: "Data1" },
  { key: "Sample2", data: "Data2" },
  { key: "Sample3", data: "Data3" },
  { key: "Sample4", data: "Data4" }
];

const groupedData = {};

for (const item of data) {
  if (!groupedData[item.key]) {
    groupedData[item.key] = [];
  }
  groupedData[item.key].push(item);
}

console.log(groupedData);


//

////function////
(function() {
console.log('a');
setTimeout(function() {console.log('b')}, 3000);
Promise.resolve().then(() => console.log('Promise 1'));			
setTimeout((function() {console.log('c')})(), 4000);	
console.log('d');
})();


//

///// some new 
// find bound index given bound

let arr =['bound','unbound','unbound','bound','unbound','unbound','bound','bound']

let number = 2

let str = 'bound'

function find(arr,num,string){
    let count  = 0;
    
    for(let i =0;i <arr.length;i++){
        if(arr[i] === string){
            count++;
        }
        
        if(count === number){
            return i
        }
        
    }
    
}
console.log(find(arr,number,str))


////// output will be a3b2c1d3

let str = "aaabbcdddeeeea";

function merge(str){
let convert = str.split("");
let res = ''
for(let i =0;i<convert.length;i++){

   let count = 1
   while(convert[i] === convert[i+1]){
       count++ ;
       i++
   }
   res += convert[i] + count
}
    return res
}


///// find prime number

function prime(num){

     if(num < 2){
         return false
     }
     for(let i =2;i < num;i++){
         if(num % i === 0){
             return false
         }
     }
         return true
}

console.log(prime(13))

/////
// const arr = [2,]

function prime(num){

     if(num < 2){
         return false
     }
     for(let i =2;i < num;i++){
         if(num % i === 0){
             return false
         }
     }
         return true
}

console.log(prime(13))
