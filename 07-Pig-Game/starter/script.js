'use strict';
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// # is used to select element from id in html file
// . is used to select elemet from class in html file
const score0El = document.querySelector('#score--0');
//Another way to write above line of code i.e.
//Calling element using id
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
//const score1 = document.querySelector('#score--1');
/* score0El.textContent = 0;
score1El.textContent = 0;
let playing = true; */
/* Define below class in style.css to hide the thing/img 
from the html page by calling in js
.hidden {
    display: none;
  }
 */

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
//This removes the dice from page
//diceEl.classList.remove('hidden'); //This adds back dice to page

let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let scores, currentScore, activePlayer, playing;

//Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  //let currentScore1 = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Ternary operation to switch the player
  //If active player is equal to 0, then assign active player 1
  // or else assign active player 0
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //console.log('Button Clicked');
  //1. Generating a random dice roll
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled1: if true, switch to next player
    /* document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  //Ternary operation to switch the player
  //If active player is equal to 0, then assign active player 1
  // or else assign active player 0
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active'); */
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //current0El.textContent = currentScore; This will always set current score to one player
      //We can use above trick to dynamically assign the currentScore to the active player
      //score0El.textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('Hold Button');
    scores[activePlayer] += currentScore;
    //scores[1] = scores[1]+currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 30) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('.player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('.player--active');
    } else {
      switchPlayer();
    }
  }
});
btnNew.addEventListener('click', init);
