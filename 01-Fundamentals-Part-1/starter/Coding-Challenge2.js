const johnWeight = 78;
const johnHeight = 1.69;
const markWeight = 92;
const markHeight = 1.95;
//BMI = mass / height ** 2 = mass / (height * height) (mass in kg
  //  and height in meter).
let bmiMark = markWeight/(markHeight * markHeight);
let bmiJohn = johnWeight/(johnHeight * johnHeight);
if (bmiMark > bmiJohn){
    console.log(`BMI Mark ' ${bmiMark} ' is higher compared to BMI John ' ${bmiJohn} '`);
}
else {
    console.log(`BMI John ${bmiJohn} is higher comapred to BMI Mark ${bmiMark}`);
}