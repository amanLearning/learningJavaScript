/*console.log("Hello JS");
function calcAge1(birthYear){
return 2037-birthYear;
}
const age = calcAge1(1988);
console.log(age);

const calcAge2 = function(birthYeah){
    return 2035-birthYeah;
}
const age1 = calcAge2(1988);
console.log(age1);
//Arrow function

const calcAge3 = birthYeah => 2037 - birthYeah;

//Calling function inside function & returning 2 variables from one function
/* function cutFruitPieces(fruit){
    // console.log(juice);

    return fruit*4;
}
fruitPieces =  10; 
function fruitProcessor(apples , oranges) {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);
//console.log(juice);
let juice = `juice with ${apples} apples and  ${oranges} oranges.`;
const fruitPieces = `juice with ${applePieces} applePieces and ${orangePieces} orangePieces.`;
return [juice , fruitPieces];

}
// console.log(juice);
// var juice=20;
console.log(fruitProcessor(2,4));
console.log(Object.getPrototypeOf(Function));
console.log(Array.prototype);
// [juice , fruitPieces] = fruitProcessor(juice, fruitPieces); */

/*const calcAge = function (birthYeah){
    return 2033-birthYeah;
}

const yearsUntilRetirement = function(birthYeah, name){
const age = calcAge(birthYeah);
const retirement = 65 - age;
if (retirement > 0){
    console.log(`${name} has ${retirement} years until retirement`);
    return retirement;
} else {
    console.log(`${name} has ${retirement} years until retirement`);
    return -1;
} 
}

console.log(yearsUntilRetirement(1988, 'Aman'));
console.log(yearsUntilRetirement(1990, 'Oi'));
console.log(yearsUntilRetirement(1968, "Fuck"));
//Array
const friend1 = "Aman";
const friend2 = "Oihoi";
const friend3 = "Sam";

const friends = ['Aman' , 'Oihoi', 'Sam'];
console.log(friends);
console.log(friends[1]);
const years = [1991, 1984, 1987, 1988, 1983];
console.log(years[1]);
const years1 = new Array(1920, 1929, 2020, 2025);
console.log(years1[3]);
//To get length of the Array
console.log(years.length);
console.log(years[years.length-1]); //To get years Array at position[4] start from 0
//friends at 3rd position in array should be changed to Are 
friends[2] = 'Are';
console.log(friends);

const first_Name = "Amandeep";
const aman = [first_Name, 'Singh' , 'Parmar', 2023-1988, friends];
console.log(aman);
console.log(aman.length);
//Exercise
const calcAge__ = function(birthYeah){
    return 2023 - birthYeah;
}
const years_ = [1920, 2019, 2020, 1988, 1983];
const age1_ = calcAge__(years_[0]);
const age2_ = calcAge__(years_[1]);
const age3_ = calcAge__(years_[years_.length-1]);
console.log(age1_,age2_,age3_);
//const ages = [calcAge__(years_[0])], calcAge__(years_[1]), calcAge__(years_.length - 1);
//console.log(ages);

const newLength = friends.push('Manu'); //Push is used to add a new element to end of Array
console.log(friends);
console.log(newLength);

friends.unshift('Meet'); //unshift is used to add a new element to start of the Array
console.log(friends);

friends.push('Raj');
console.log(friends);

friends.pop(); //Removes last element from the Array
console.log(friends);
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //removes first element from the Array
console.log(friends); 
console.log(friends.indexOf('Are'));//Index of element in the array
console.log(friends.indexOf('Meet'));
console.log(friends.includes('Are'));//Outputs true if element is part of Array
console.log(friends.includes('Meet'));//Outputs false if element is not part of Array
if (friends.includes('Are')){
    console.log('You have a friend called Are');
}

//Object has key and value pair for each element in the object
//and is declared using {} whereas Arrays are in between []

const amanDetails = {
firstName : 'Amandeep',
lastName : 'Parmar',
middleName : 'Singh',
tech : 'JS',
tech1 : 'Solidity',
goal : 'BlockChain',
age : '2023-1988',
friends1 : ['Meet', 'Manu', 'Oihoi', 'Raj', 'Are'] 
};
console.log(amanDetails);
console.log(amanDetails.lastName);
console.log(amanDetails['lastName']);
const nameKey = "Name";
console.log(amanDetails['first'+ nameKey]);
console.log(amanDetails['last'+ nameKey]);
console.log(amanDetails['middle'+nameKey]);
//console.log(jonas.nameKey);

const interestedIn = prompt('what details do you want to know about Aman? choose between firstName, lastName, middleName, age, tech, tech1, goal, friends1');
console.log(interestedIn); 
console.log(amanDetails[interestedIn]); 
//console.log(amanDetails[nameKey]);

if(amanDetails[interestedIn]){
    console.log(amanDetails[interestedIn]);
}else {
    console.log('wrong request! choose between firstName, lastName, middleName, age, tech, tech1, goal, friends1');
}
amanDetails.location='India';
amanDetails['gmail']='parmar.amandeep88@gmail.com';
amanDetails.facebook='dalKhrogo';
console.log(amanDetails);
*/
//Objects
const aman = {
firstName: 'Amandeep',
lastName: 'Parmar',
middleName: 'Singh',
tech: 'js',
tech1: 'Solidity',
goal: 'Blockchain',
friends: ['Are', 'Oii', 'Meet', 'Preeti', 'Raj'],
calcAge: function(birthYeah){
    return 2023-birthYeah;
},
getSummary: function(){
return `${this.firstName} is a 
${this.calcAge(1988)} old driver, 
and he has ${this.hasDriversLicense ? 'a' : 'no'} 
drivers license.`
}
};
aman.country = 'India';
aman.hasDriversLicense = true;
console.log(aman);
aman.continent = 'Asia';
console.log(aman);
console.log(aman.calcAge(1988));
console.log(aman['calcAge'](1988));
console.log(aman.friends[0]);
console.log(aman.getSummary());

for (let rep=1; rep<=10; rep++){
    console.log(`Lifting weights repitition ${rep}`);
}

const aman1 = [
'Oihoi',
'Yoga',
'Are',
35,
'gym',
['meet','preet','raj','jot'],
true,
];
const types = [];
for(i=0;i<aman1.length;i++){
    console.log(aman1[i], typeof aman1[i]);
    types[i] = typeof aman1[i];
    console.log(types);
}
const years = [1990, 1999, 2022, 2011, 1974];
const ages = [];
for (i=0; i<years.length; i++){
ages.push(2023-years[i]);
console.log(ages);
}
console.log(ages);

//Continue & Break statements
console.log('---------Print Only Strings----------');
for(i=0;i<aman1.length;i++){
    if(typeof aman1[i] !== 'string') continue;
    console.log(aman1[i], typeof aman1[i]);
    //types[i] = typeof aman1[i];
    //console.log(types);
}
console.log('---------Break with Number----------');
for(i=0;i<aman1.length;i++){
    if(typeof aman1[i] === 'number') break;
    console.log(aman1[i], typeof aman1[i]);
    //types[i] = typeof aman1[i];
    //console.log(types);
}

//Looping backwards
for(i=aman1.length-1; i>=0; i--){
    console.log(aman1[i]);
}
//Loop inside a loop
for (let exercise=1; exercise<4; exercise++){
console.log(`-----Starting exercise ${exercise} ----`);
for(let rep=1; rep<8; rep++){
    console.log(`Number of repetitions ${rep}`);
}
}
let rep=1;
while (rep<=10) {
    console.log(`WHILE: Lifting weights repetition ${rep} 🏋🏼`);
    rep++;
}

//WRITE A WHILE LOOP WHICH STOPS WHEN DICE HITS 6.
let dice = Math.trunc(Math.random() * 6) +1;
while (dice !== 6){
console.log(`You rolled a ${dice}`);
dice = Math.trunc(Math.random() * 6) +1;
if(dice===6) console.log("Loop is about to end");
}


























