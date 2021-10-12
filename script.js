'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,
  highscore = 0;

// Queries
const checkQuery = document.querySelector('.check');
const againQuery = document.querySelector('.again');
const guessQuery = document.querySelector('.guess');
const messageQuery = document.querySelector('.message');
const numberQuery = document.querySelector('.number');
const bodyQuery = document.querySelector('body');
const highscoreQuery = document.querySelector('.highscore');
const scoreQuery = document.querySelector('.score');

// Functions

const displayMessage = function (message) {
  return (messageQuery.textContent = message);
};

checkQuery.addEventListener('click', function () {
  const guess = Number(guessQuery.value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    numberQuery.textContent = secretNumber;
    bodyQuery.style.backgroundColor = '#60b347';
    numberQuery.style.width = '30rem';
    checkQuery.style.visibility = 'hidden';

    if (score > highscore) {
      highscore = score;
      highscoreQuery.textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    score--;
    displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
  }

  if (score < 1) {
    displayMessage('😔 You lost the game');
    scoreQuery.textContent = 'XX';
  } else {
    scoreQuery.textContent = score;
  }
});

againQuery.addEventListener('click', function () {
  secretNumber = secretNumber;
  score = 20;
  bodyQuery.style.background = '#222';
  checkQuery.style.visibility = 'visible';
  displayMessage('Start guessing...');
  numberQuery.textContent = '?';
  numberQuery.style.width = '15rem';
  guessQuery.value = '';
  scoreQuery.textContent = score;
});
