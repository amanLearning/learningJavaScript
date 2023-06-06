const calcAvg = (a,b,c) => (a+b+c)/3;
console.log(calcAvg(1,2,3));

let dolphinsAvg = calcAvg(44,23,71);
let koalasAvg = calcAvg(65,54,49);
console.log(dolphinsAvg,koalasAvg);

const winner = function(scoreDolphins, scoreKoalas){
if (scoreDolphins > 2*scoreKoalas){
    console.log(`Dolphins is the winner 🏆 ${scoreDolphins} Vs ${scoreKoalas}`);
}else if (scoreKoalas > 2*scoreDolphins){
    console.log(`Koalas is the winner 🏆 ${scoreDolphins} Vs ${scoreKoalas}`);      
}    
else {
    console.log('The game is a draw');
}
return "wooofff";
}
winner(dolphinsAvg,koalasAvg);
console.log(winner(dolphinsAvg,koalasAvg));
winner(500,100);
dolphinsAvg = calcAvg(85,54,41);
koalasAvg = calcAvg(23,34,27);
console.log(dolphinsAvg,koalasAvg);
winner(dolphinsAvg,koalasAvg);
