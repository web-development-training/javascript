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
