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
