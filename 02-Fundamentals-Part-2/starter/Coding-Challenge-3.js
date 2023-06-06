const mark = {
fullName: 'Mark Miller',
massMark: 78,
heightMark: 1.69,
calcBMIMark: function(massMark, heightMark){
BMIMark=massMark/(heightMark*heightMark);
return BMIMark;
},

};
const john = {
fullName: 'John Smith',
massJohn: 92,
heightJohn: 1.95,
calcBMIJohn: function(massJohn, heightJohn){
    BMIJohn=massJohn/(heightJohn*heightJohn);
    return BMIJohn;
}
}
console.log(mark.calcBMIMark(mark.massMark, mark.heightMark));
console.log(john.calcBMIJohn(john.massJohn, john.heightJohn));
if (mark.calcBMIMark > john.calcBMIJohn) {
console.log(`Mark's BMI ${BMIMark} is higher than John's BMI ${BMIJohn}`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's BMI ${BMIMark}`);
}