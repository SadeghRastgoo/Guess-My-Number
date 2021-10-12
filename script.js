'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highscore = score > highscore ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('.check').style.visibility = 'hidden';
  } else if (guess > secretNumber) {
    score--;
    document.querySelector('.message').textContent = '📈 Too high';
  } else if (guess < secretNumber) {
    score--;
    document.querySelector('.message').textContent = '📉 Too low';
  }

  if (score < 1) {
    document.querySelector('.message').textContent = '😔 You lost the game';
    document.querySelector('.score').textContent = 'XX';
  } else {
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.background = '#222';
  document.querySelector('.check').style.visibility = 'visible';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
