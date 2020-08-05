var data = {
  rollNo: 67,
  name: {
    firstName: 'foo',
    lastName: 'bar'
  },
  age: 30,
  canVote: true,
  //   marks: {
  //     english: 100,
  //     tamil: 100,
  //     math: 100
  //   },
  array: [10, 20, 10, 20, 20]
};

data.marks.english;

data && data.marks && data.marks.english;

data?.marks?.english;

// https://javascript.info/optional-chaining
