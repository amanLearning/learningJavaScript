let bill = 400;
let tip = .15 * bill; 
let tip1 = .2 * bill;
total = bill + tip;
total1 = bill + tip1;
if (bill >=50 && bill <=300) {
    console.log(`Bill is ${bill}, tip is ${tip} & Total amount to be paid is ${total}`);
} else {
    console.log(`Bill is ${bill}, tip is ${tip1} & Total amount to be paid is ${total1}`);
}

bill >=50 && bill <=300 ? console.log(`Bill is ${bill}, tip is ${tip} & Total amount to be paid is ${total}`) : console.log(`Bill is ${bill}, tip is ${tip1} & Total amount to be paid is ${total1}`);

