// array destructuring
// var arr = ['Ilya', 'Kantor'];

// // var firstName = arr[0];
// // var lastName = arr[1];

// var [firstName, lastName] = arr;

// console.log(firstName);
// console.log(lastName);

// Ignore elements using commas
// Unwanted elements of the array can also be thrown away via an extra comma:
// // second element is not needed
// let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert( title ); // Consul

// object destructuring
var data = {
  rollNo: 67,
  name: {
    firstName: 'foo',
    lastName: 'bar'
  },
  age: 30,
  gender: 'Female',
  canVote: true,
  marks: {
    english: 100,
    tamil: 100,
    math: 100
  },
  array: [10, 20, 10, 20, 20]
};

// var name = data.name;
// var firstName = name.firstName;
// var lastName = name.lastName;
// var sex = data.gender;

var {
  name: { firstName, lastName },
  age,
  gender: sex
} = data;

console.log(firstName, lastName, age, sex);

var options = {
  title: 'Menu',
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
var { width: w, height: h, title } = options;

console.log(w, h, title);

// let options = {
//     title: "Menu"
//   };

// let { width = 100, height = 200, title } = options;
// let { width: w = 100, height: h = 200, title } = options;

// alert(title); // Menu
// alert(width); // 100
// alert(height); // 200

// https://javascript.info/destructuring-assignment
