'use strict';
let player0 = 0;
let player1 = 0;
let turn = 0;

let temp0=0;
let temp1=0;

const query = (selector) => document.querySelector(selector);

const id = (id) => document.getElementById(id);

function switchTo1 () {
  temp0 = 0;
  id('current--0').innerHTML = temp0;
  turn = 1;
  query('.player--1').classList.add('player--active');
  query('.player--0').classList.remove('player--active');
}

function switchTo0 () {
  temp1 = 0;
  id('current--1').innerHTML = temp1;
  turn = 0;
  query('.player--0').classList.add('player--active');
  query('.player--1').classList.remove('player--active');
}

query('.dice').style.display = 'none';

const generateRandom = () => {
  return Math.trunc(Math.random() * 6) + 1;
}
const rollDice = () => {
  const number  = generateRandom();
  query('.dice').style.display = 'block';
  query('.dice').src = `dice-${number}.png`
  if(number !== 1) {
    if(turn === 0) {
      temp0 += number;
      id('current--0').innerHTML = temp0;
    } else {
      temp1 += number;
      id('current--1').innerHTML = temp1;
    }
  } else {
    if(turn === 0 && temp0 !== 0) {
      switchTo1();
    } else if(turn === 1 && temp1 !== 0) {
      switchTo0();
    }
  }
}

const hold = () => {
  if(turn === 0) {
    player0+=temp0;
    id('score--0').innerHTML = player0;
    switchTo1();
  } else {
    player1+=temp1;
    id('score--1').innerHTML = player1;
    switchTo0();
  }

  if(player0 >= 100) {
    query('.player--0').classList.add('player--winner');
    query('.dice').style.display = 'none';
    query('.btn--roll').removeEventListener('click', rollDice)
    query('.btn--hold').removeEventListener('click', hold)
  }

  if(player1 >= 100) {
    query('.player--1').classList.add('player--winner');
    query('.dice').style.display = 'none';
    query('.btn--roll').removeEventListener('click', rollDice)  
    query('.btn--hold').removeEventListener('click', hold)
  }
}

query('.btn--roll').addEventListener('click', rollDice)

query('.btn--hold').addEventListener('click', hold)

query('.btn--new').addEventListener('click', () => {
  player0=0;
  player1=0;
  temp0=0;
  temp1=0;
  turn=0;
  query('.player--0').classList.remove('player--winner');
  query('.player--1').classList.remove('player--winner');
  id('current--0').innerHTML = temp0;
  id('score--0').innerHTML = player0;
  id('current--1').innerHTML = temp1;
  id('score--1').innerHTML = player1;
  switchTo0()
  query('.btn--roll').addEventListener('click', rollDice)
  query('.btn--hold').addEventListener('click', hold)
})

