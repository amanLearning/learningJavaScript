const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
tips = [];
totals = [];
calcTip = function (bill){
    if (bill >= 50 && bill <=300){
        return bill*.15;
    } else {
        return bill*.2;
    }
    }
    for (let i=0; i<bills.length; i++){
        tip = calcTip(bills[i]);
        tips.push(tip);
        totals.push(bills[i] + tip);
    }
    console.log(bills, tips, totals);
//const arr = [5, 10, 15, 20];
calAvg = function(avg){
    let sum=0;
for(i=0; i<totals.length; i++){
    sum+=totals[i];
}
return avg = sum/totals.length;
}
console.log(calAvg(totals));
console.log(calAvg(totals));
