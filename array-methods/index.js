let array = [1, 2, 3, 4, 5];

// let arrayCopy = array; // copy by reference
// let arrayCopy1 = [...array]; // spreading array values to a new array

// array[3] = 20;

// array; // 1 2 3 20 5
// arrayCopy; // 1 2 3 20 5

let arrayCopy = array.map(function (item) {
  return item - 1;
}); // [0, 1, 2, 3, 4]

// let arrayCopy = array.map((item) => item - 1); // [0, 1, 2, 3, 4]

let lastValue = array.pop(); // 4 // [0, 1, 2, 3];
// Removes the last element from an array and returns that element.

let arrayLengthAfterPush = array.push(10); // [0, 1, 2, 3, 10] // 5

let arrayCopy1 = array.filter((item) => item % 2 === 0); // [0, 2, 10];
