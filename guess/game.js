'use strict'

const scoreValue = 20;
let highScore = 0;
let score = scoreValue;
let userInput = '';
let message = 'Start guessing ......';
let number='';
let response = document.getElementById('response');
response.innerHTML = message;

function generateNumber () {
  number = (Math.floor(Math.random() * 100)) % 20 +1;
}
generateNumber()

function handleAgain(){
  let response = document.getElementById('response');
  let input = document.getElementById('uinput');
  let sinput = document.getElementById('scoreId');
  let ans = document.querySelector('.ans');
  document.querySelector('body').style.backgroundColor = 'white';

  message = 'Start guessing ......';
  response.innerHTML = message;
  input.value = ''
  score=scoreValue;
  userInput = 0;
  generateNumber()
  sinput.innerHTML = scoreValue;
  ans.textContent = '[ ? ]'
}

function handleChange() {
  console.log('inp0ut = ',);
}

function handleCheck() {
  let response = document.getElementById('response');
  let input = document.getElementById('uinput');
  let hinput = document.getElementById('highscoreId');
  let sinput = document.getElementById('scoreId');
  let ans = document.querySelector('.ans');

  userInput = input.value;
  if(score < 1) {
    message = 'Sorry :( You lost this game !! Please try again !'
  } else {
    if(userInput < number) {
      score-=1;
      message = 'Too Low !!'
    } else if(userInput > number) {
      score-=1;
      message = 'Too High !!'
    } else {
      message = 'Wow !! You matched it :) '
      document.querySelector('body').style.backgroundColor = 'lightGreen';
      ans.textContent = number;
      if(score > highScore) {
        highScore = score
      }
    }
  }
  
  response.innerHTML = message;
  userInput = 0;
  hinput.innerHTML = highScore;
  sinput.innerHTML = score;
}