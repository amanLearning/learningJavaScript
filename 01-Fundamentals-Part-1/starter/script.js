let js = "Amazing";
if (js === "Amazing") alert("javaScript is fun");
console.log(52+8+5-2);
let firstName = "oihoioi";
console.log(firstName);
console.log(firstName);
console.log(firstName);

console.log("Aman");
console.log("34");

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Aman")
const now = 2023;
const birthYearAman = 1988;
const birthYearBae = 1987;
const ageAman = now - birthYearAman;
let ageBae = now - birthYearBae;
console.log(ageAman , ageBae);
console.log(ageAman*2 , ageBae*2 , 2**3);

const first_Name = "Amandeep";
const lastName = "Parmar";
console.log(first_Name + " " + lastName);
console.log(ageAman > ageBae);

const first__Name = "Aman";
const job = "Student";
const currentYear = 2023;
const birthYear = 1988;
//Type Coercion
const jonas = 'My name is ' + first__Name + ', my age is ' + (currentYear - birthYear) + ' & i am a ' + job ;
console.log(jonas);

// String literal example
const jonasNew = `My name is ${first__Name} , my age is ${currentYear - birthYear}  & i am a ${job}` ;
console.log(jonasNew);

const ageSam = 36;
const validDrivingAge = 18;

if (ageSam >= validDrivingAge){
console.log(`Sam is eligible to drive 🚗`);
}
else {
    console.log(`Sam is eligible after ${validDrivingAge - ageSam} years to drive 🚗`);

}
//Type Conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

//Type coercion
console.log('I am ' + 23 + ' years old');
console.log('5' + '5'); //Adding 2 strings gives the output 55; point to note - mathematically not correct
console.log('5' * '5');
console.log('7' - '5');
console.log('25'/'5');
//Subtracting, dividing or mutiplying 2 strings gives mathematically correct output.
const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);
if (favourite===22) {
    console.log("Cool, 22 is an amazing number");
    
}
else{
    console.log("favourite number is not 22");
}
const hasDriverLicense = true;
const hasGoodVision = false;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
const shouldDrive = hasDriverLicense && hasGoodVision
if(shouldDrive){
    console.log('Sarah should drive!');
}
else {
    console.log('Someone else should drive!');
}
//Switch-Case
const day = 'saturday';
switch (day) {
case 'monday':
    console.log('Pack luggage and take flight to Indore');
break;
case 'tuesday':
console.log('Buy a javaScript course from Udemy');
break;
case 'wednesday':
case 'thursday':
console.log('Study JS for 5 hours a day');
console.log('Study Solidity for 3 hours a day');
case 'friday':
case 'saturday':
console.log('Revise JS & Solidity concepts');
console.log('Study new Js & Solidity concepts');
case 'sunday':    
console.log('study, go out with family');
}
//Ternary Operator
const age = 15;
age >=18 ? console.log('Drink wine 🍷') : console.log('Drink Milk 🥛');
const drink = age>=18 ? 'Drink Wine ' : 'Drink Milk';
console.log(drink);
//Template literal using Ternary operator
console.log(`I like to drink ${age >= 18 ? 'wine' : 'Water'} `);


