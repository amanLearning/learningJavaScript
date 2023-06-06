'use strict';
function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const output = `You are ${age} year's old & born in ${birthYear}.`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Aman';
const age1 = calcAge(1988);
console.log(`Name is ${firstName} , age is ${age1}.`);

//Hoisting with strict - let and const will give initialization error
// var will give undefined
console.log(me);
//console.log(job);
//console.log(year);

var me = 'jonas';
let job = 'Student';
const year = 1998;

//functions hoisting wil give the corect output
console.log(addDecl(2, 3));
function addDecl(a, b) {
  return a + b;
}

// cannot access before initialization
/* console.log(addDecl(2, 3));
const addDecl = function (a, b) {
  return a + b;
};

// var will give undefined
console.log(addArrow);
var addArrow = (a, b) => a + b; */

//The this keyword
console.log(this);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me1 = {
  name: 'Aman',
  age: '34',
};
const friend = me1;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me1);
