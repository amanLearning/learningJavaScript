const calcTip = function (bill){
    if (bill >= 50 && bill <=300){
        return bill*.15;
    } else {
        return bill*.2;
    }
    }
const bill1 = 100;
calcTip(bill1);

const bills = [40, 350, 400];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);
let total0 = bills[0] + tips[0]; 

let total1 = bills[1] + tips[1];
let total2 = bills[2] + tips[2];
console.log(total0, total1, total2);
const total = [total0, total1, total2];
console.log(total);

//let total3 = bills[3] + bills[3];
//const total = ;
//console.log(total);