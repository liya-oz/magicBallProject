'use strict';

const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
let audio;

function setupAudio() {
 audio = document.getElementById('audio');

  audio
    .play()
    .then(() => {
      console.log('Audio autoplay started muted.');
    })
    .catch((error) => {
      console.log('Autoplay failed: ', error);
    });

  document
    .getElementById('askAwayButton')
    .addEventListener('click', function () {
      audio.muted = false;
      audio.currentTime = 0;
      audio
        .play()
        .then(() => {
          console.log('Audio is playing after unmuting.');
        })
        .catch((error) => {
          console.log('Error playing audio: ', error);
        });
    });
}

function setupStartButton() {
  const startButton = document.getElementById('start-button');

  startButton.addEventListener('click', function () {
    block1.style.display = 'none';
    block2.style.display = 'block';
    block2.scrollIntoView({ behavior: 'smooth' });
  });
}

function setupAskAwayButton() {
  document
    .getElementById('askAwayButton')
    .addEventListener('click', function () {
      block2.style.display = 'none';
      block3.style.display = 'block';
      block3.scrollIntoView({ behavior: 'smooth' });
      displayAnswer();
    });
}

function displayAnswer() {
  const answers = ['Yes!', 'No!'];
  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  const answerElement = document.getElementById('answer');

  let countdown = 3;
  answerElement.innerText = `Answer in ${countdown}...`;

  const countdownInterval = setInterval(() => {
    countdown--;
    if (countdown > 0) {
      answerElement.innerText = `Answer in ${countdown}...`;
    } else {
      clearInterval(countdownInterval);
      answerElement.innerText = randomAnswer;
     if (audio) {
        audio.pause();
        console.log('Audio stopped after receiving the answer.');
      }
    }
  }, 1000);
}

function setupUndoButton() {
  const undoButton = document.getElementById('undoButton');

  undoButton.addEventListener('click', function () {
    block1.style.display = 'block';
    block2.style.display = 'none';
    block3.style.display = 'none';
  });
}

function main() {
  setupAudio();
  setupStartButton();
  setupAskAwayButton();
  setupUndoButton();
}

window.onload = main;
