var a = 'Hello';

// var -> Keyword
// foo -> variable name
// = -> assignment operator
// "Hello" -> value

10 + 20; // 30
10 + '10'; // '1010'
'10' + 100; // '10100'
'hello' + 20; // 'hello20'
20 + 'world'; // '20world'
100 + ''; // '100'
'hello' + ' ' + 'world'; // 'hello world'
'hello' + 'world'; // 'helloworld'
undefined + 'hello'; // 'undefinedhello'
null + '100'; // 'null100'
undefined + 10; // NaN
null + 20; // NaN

10 - 20; // -10
20 - 10; // 10
10 - '10'; // 0
10 - 'hello'; // NaN
'hello' - 10; // NaN
'100' - 20; // 80

// *
// /
// %
// **

// Type coercion -> Implicit coercion // Javascript does it
10 + ''; // '10'
!10; // false
!!10; // true -> Boolean(10)

// Type conversion -> Explicit coercion // Developers does this
String(20); // '20'
Number('10'); // 10
Boolean(20); // true

// Comparison operators

// is the both sides are in different type, == will do Implicit coercion
100 == 100; // true
100 == '100'; // true
'100' == '100'; // true
10 == 100; // false

// === will NOT do Implicit coercion
100 === 100; // true
100 === '100'; // false
'100' === '100'; // true
10 === 100; // false

100 != 100; // false
100 != '100'; // false
'100' != '100'; // false
10 != 100; // true

100 !== 100; // false
100 !== '100'; // true
'100' !== '100'; // false
10 !== 100; // true

10 < 290; // true
290 < 10; // false
10 < 10; // false

10 <= 10; // true
100 <= 10; // false

10 > 290; // false
290 > 10; // true
290 > 290; // false

10 >= 10; // true
100 >= 10; // true

10 > 'hello'; // false
'hello' < 10; // false
10 < '10'; // false
10 < Number('10'); // false

// it will search for false
true && true; // true
false && true; // false
true && false; // false
false && false; // false

10 && 20; // 20
0 && 20; // 0
0 && 0; // 0
' ' && ''; // " "

// it will search for true
true || true; // true
false || true; // true
true || false; // true
false || false; // false

100 || 23243; // 100
0 || 434; // 434
'' || 0; // 0
'hello' || 'world'; // 'hello'
'foo' || 100; // 'foo'

// String
// '' // single quotes
// "" // double quotes
// `` // back tick

// Number
// -1000
// -1
// 0
// -0
// +0
// 1
// 1000
// 1000000000000

// Numeric separators
// 1_000_000_000_000
// 1_000_000.220_720
// https://v8.dev/features/numeric-separators

// Boolean
// true
// false

// Falsy values
// When we convert something to Boolean
// and if it gives use false value then it is falsy values

// -0
// 0
// undefined
// null
// NaN
// ''
// false

// Truthy values
// Any value other then the Falsy value is Truthy

// undefined

// null

// NaN

// post incremental operator
var c = 10++; // c is 10
// in the next line/after the statement completed c will be 11

// pre incremental operator
var d = ++10; // d is 11

// post decremental operator
// var e = 10--; // 10

// pre decremental operator
// var f = --10; // 9

var g = 10;

// g = g + 20; // g is 30

// Short hand
g += 20; // g is 30
g -= 10; // g is 20
g *= 2; // g is 40
g /= 2; // g is 20
g **= 2; // g is 400 // 20 power of 2 is 400

g %= 3; // g is 1
// 400 / 3 => 133.33333333333334
// 133 * 3 => 399 so reminder is 1 so the % is 1

typeof g; // number

g *= 'hello'; // NaN // Not a Valid Number

typeof g; // number

// typeof - to find the value type

if (10) {
  // what every the value inside the if condition it will convert it to Boolean value and check the condition
  // Boolean(10) -> true
} else {
  // if the if condition fails the else block will be executed
}

// 10 ? console.log('this is the if block') : console.log('this is the else block');
// ternary operator
