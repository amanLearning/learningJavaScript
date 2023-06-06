const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
  //  and height in meter).
let bmiMark = markWeight/(markHeight * markHeight);
let bmiJohn = johnWeight/(johnHeight * johnHeight);


console.log(bmiMark, bmiJohn, bmiMark < bmiJohn);