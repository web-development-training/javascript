// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

var a = 10;

function add() {
  if (false) {
    var b = 20;
  }
  console.log(a, b); // 10, undefined
}

var a; // Compilation time
a = 10; // Execution time
function add() {
  // Compilation time
  var b; // Compilation time
  if (false) {
    b = 20; // Execution time
  }
  console.log(a, b); // Execution time // 10, undefined
}
// --------------------------

add(10, 20);

function add(a, b) {
  return a + b;
}

// --------------------------

console.log(b);

var b = 20;

// --------------------------

console.log(c);

let c = 20;

// --------------------------
let a = 10;

function add() {
  if (true) {
    let b = 20;
    console.log(a, b); // 10, 20
  }
  console.log(a, b); // 10, Undeclared error
}

// --------------------------

{
  let a = 10;
}
console.log(a); // Undeclared error

// --------------------------
const tax; // error
const tax = 18; // Primitive type values in const cannot be changed.
tax = 20; // error

const obj = {
  name : 'Foo',
  age : 30
};

obj.age = 31; // Non Primitive type value in const can be changed.

// --------------------------


function add10(a) {
  return a + 10;
}

let add10 = a => a + 10; // arrow function

let result = add(10, 20);

// -----------------------------------

let arr = [10, 20];

let add = ([a, b]) => a + b;

add(arr);

// let [a, b] = arr;


// -----------------------------------

let obj = {
  a: 100,
  b: 100
}

let add = ({a, b}) => a + b;

add(obj);


// -----------------------------------

var array = [1, 3];
for (let i = 0; i < array.length; i++) {
  
}

console.log(i); // Reference error

// -----------------------------------

// Spread

let array1 = [1, 2, 3];
let array2 = [5, 6, 7];

let combineArray = [...array1, ...array2]; // [1, 2, 3, 5, 6, 7]
[10, 20, ...array1, 30, 50]; // [10, 20, 1, 2, 3, 30, 50]


// var
// let
// const
// function
// arrow function
// array
// object
// array destructing
// object destructing
// Primitive type
// Non-Primitive type
// Falsy
// Truthy
// Scope
// Optional chaining
// setTimeout
// setInterval
// DOM
// Spread 
// Rest
