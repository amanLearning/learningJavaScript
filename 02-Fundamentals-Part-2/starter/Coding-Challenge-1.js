var teamDolphins = function (game1, game2, game3){
const avgDolphinsScore = (game1+game2+game3)/3;
return avgDolphinsScore;
}
var teamKoalas = function (game1, game2, game3){
const avgKoalasScore = (game1+game2+game3)/3;
return avgKoalasScore;
}
let finalScoreDo = console.log(teamDolphins(85,54,41));
let finalScoreKo = console.log(teamKoalas(23,34,27));
let winner = function(d,k){
    if (d >= 2*k){
        console.log('Dolphins is the winner');
    }else if(k >= 2*d){
        console.log('Koalas is the winner');
    } else{
        console.log('It is a draw game');
    }    
}
console.log(winner(finalScoreDo,finalScoreKo));
console.log(winner(576,111));
/* var finalScoreDolphins = console.log(teamDolphins(44,23,71));
var finalScoreKoalas = console.log(teamKoalas(65,54,49));
 */
/* if (avgDolphinsScore >= 2*avgKoalasScore){
    return 'Dolphins is the winner';
}else if(avgKoalasScore >= 2*avgDolphinsScore){
    return 'Koalas is the winner';
} else{
    return 'It is a draw game';
} */