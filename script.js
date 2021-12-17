'use strict';

const checkBtn = document.querySelector('.btn.check');
const numberInp = document.querySelector('input.guess');
const scorePlaceholder = document.querySelector('.score');
const numberBox = document.querySelector('.number');
const messageEl = document.querySelector('.message');
const hightScoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');
const upKey = document.querySelector('.bi1');
const downKey = document.querySelector('.bi2');

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const notCorrectState = function (messagePlaceholder) {
  messageEl.textContent = messagePlaceholder;
  score > 0 ? score-- : score;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(numberInp.value);

  if (!guess) {
    messageEl.textContent = '⛔ No Number!';
  } else if (score <= 1) {
    notCorrectState('💥 You Lost the game!');
    scorePlaceholder.textContent = score;
  } else if (guess === number) {
    messageEl.textContent = '🎉 Correct Number!';
    numberBox.textContent = number;
    bodyEl.style.backgroundColor = '#60b347';
    checkBtn.style.display = 'none';
    document.querySelector('.number').style.width = '35rem';
    if (score > highScore) {
      highScore = score;
      hightScoreEl.textContent = highScore;
    }
  } else if (guess !== number) {
    guess < number
      ? notCorrectState('📉 Too Low!')
      : notCorrectState('📈 Too High!');
    scorePlaceholder.textContent = score;
  }
});

const reset = function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  messageEl.textContent = 'Start guessing...';
  scorePlaceholder.textContent = score;
  numberBox.textContent = '?';
  numberInp.value = '';
  bodyEl.removeAttribute('style');
  checkBtn.removeAttribute('style');
  numberBox.removeAttribute('style');
};

document.querySelector('.btn.again').addEventListener('click', reset);

upKey.addEventListener('click', function () {
  numberInp.value = Number(numberInp.value) + 1;
});
downKey.addEventListener('click', function () {
  numberInp.value = Number(numberInp.value) - 1;
});
