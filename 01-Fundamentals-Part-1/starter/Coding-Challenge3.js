const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;
const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 106;
let dolphinsAvg = (dolphins1+dolphins2+dolphins3)/3;
let koalasAvg = (koalas1+koalas2+koalas3)/3;
console.log(dolphinsAvg , koalasAvg);
if (dolphinsAvg > koalasAvg && dolphinsAvg > 100) {
    console.log('Dolphins is the winner');
} else if (dolphinsAvg === koalasAvg || dolphinsAvg < 100) {
    console.log('Game is a draw');
} else if (koalasAvg > dolphinsAvg && koalasAvg > 100) {
    console.log('Koalas is the winner');
}

