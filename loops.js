'use strict';

const myArray = [true, 'abc', 10];

//цикл for
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]);
// }

// myArray.forEach((element, index) => {
// console.log(element, index);
// });

//цикл while
// let i = 0;

// while (i < 5) {
//     console.log(i);
//     i++;
// }

//do while
// let i = 0;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

//цикл for in

const myObject = {
    x: 10,
    y: true,
    z: 'abc'
};

// for (const key in myObject) {
//     console.log(myObject[key]);
// }

Object.keys(myObject).forEach((key)=> {
    console.log(myObject[key]);
});

//for in

const myArray2 = [true, 10, 'abc', null];

for (const key in myArray2) {
    console.log(myArray2[key]);
}

//for of
const myString = 'Hey';
for(const letter of myString) {
    console.log(letter);
}


for(const element of myArray2) {
    console.log(element);
}

