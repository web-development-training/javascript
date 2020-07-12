// var a = 1;
// var b = 2;
// var c = a + b;

// a = 20;

// console.log(a);
// console.log(b);
// console.log(c);

// -----------------------
// String
// -----------------------

// "hello"
// 'hello'
// `hello`
// "a"
// ""

// -----------------------
// Number
// -----------------------

// 1
// 0
// -1
// -100
// 100
// +0
// -0

// var foo = 10;
// var bar = 20;
// var baz = foo + bar;

// console.log(baz); // 30
// -----------------------

// var foo = '10';
// var bar = '20';
// var baz = foo + bar;

// console.log(baz); // 1020
// -----------------------

// var foo = 10;
// var bar = '20';
// var baz = foo + bar;

// console.log(baz); // 1020

// var foo = 'Vinoth';
// var bar = 'Kumar';
// var baz = foo + bar;

// console.log(baz); // VinothKumar
// -----------------------

// var foo = 'Vinoth';
// var bar = 'Kumar';
// var baz = foo +" "+ bar;

// console.log(baz); // Vinoth Kumar
// -----------------------

// 'hello' + 20 -> coercion -> 'hello' + '20' -> 'hello20'

// var foo = '10';
// var bar = '20';
// var baz = foo - bar;

// // '10' - '20' -> coercion -> 10 - 20 -> -10

// console.log(baz); // -10
// -----------------------

// var foo = 'hello';
// var bar = '20';
// var baz = foo - bar;

// // 'hello' - '20' -> coercion -> NaN - 20 -> NaN
// // Not A valid Number

// console.log(baz); // NaN
// -----------------------

// *
// /
// -----------------------

// %

// var foo = 10;
// var bar = 2;
// var baz = foo % bar;

// // % - will give the reminder

// console.log(baz); // 0
// -----------------------

// var foo = 10;
// var bar = 3;
// var baz = foo % bar;

// // % - will give the reminder

// console.log(baz); // 1
// -----------------------

// String
// Number
// +
// -
// *
// /
// %
// ++
// --
// +=
// -=
// Boolean
// &&
// ||
// conditions
// Array
// loops
// Object
// functions

// var a = 10;

// a = a + 1;

// var b = a++;
// var b = ++a;

// a--;
// --a;

// a = a + 8;

// a += 8;

// a = a - 8;

// a -= 8;

// console.log(a);

// true;
// false;

// falsy

// false
// 0
// -0
// 0n
// ""
// NaN
// null
// undefined

// var a;

// a = NaN;
// a = '';
// a = false;

// typeof a;

// true && true; // true
// true && false; // false
// false && true; // false
// false && false; // false

// true || true; // true
// true || false; // true
// false || true; // true
// false || false; // false

// var a = 100 && 20; // 20
// var b = 100 && 0; // 0
// var c = 0 && 100; // 0
// var d = 0 && -0; // 0

// var a = 100 || 20; // 100
// var b = 100 || 0; // 100
// var c = 0 || 100; // 100
// var d = 0 || -0; // -0

// 0 || 20 || 100 // 20
// 0 && 20 && 100 // 0

// 10 + 20 && 20 + 100; // 120
// 10 - '' && 20 + 100; // NaN

// if ('10') {
//   var value = 10;
//   console.log(value + ' is true');
// } else {
//   console.log('10 is not true');
// }

// '' ? console.log('10 is true') : console.log('10 is not true');

// if ('') {
//   var value = 10;
//   console.log(value + ' is true');
// } else if ('') {
//   console.log('20 is true');
// } else {
//   console.log('20 is not true');
// }

// var array = [10, 20, 30, 40];
// console.log(array.length);

// console.log(array[array.length - 1]);

// array[0] = 100;

// console.log(array);

// var foo = 'Hello, word';

// console.log(foo[0]);
