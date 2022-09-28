"use strict";

let total = 0;
let current = 0;
let random = 0;
let activePlayer = 0; // 0 means player1 turns, 1 means player 2 turns

const btn = document.querySelectorAll(".btn");
const totalscore = document.querySelectorAll(".score");
const currentscore = document.querySelectorAll(".current-score");
const player = document.querySelectorAll(".player");
const diceimg = document.querySelector(".dice");

const inatialize = function () {
  currentscore[0].textContent = "0";
  currentscore[1].textContent = "0";
  totalscore[0].textContent = "0";
  totalscore[1].textContent = "0";
  player[0].classList.add("player--active");
  player[1].classList.remove("player--active");
  player[0].classList.remove("player--winner");
  player[1].classList.remove("player--winner");
};
const randomNum = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const changediceimg = function (random) {
  switch (random) {
    case 1:
      return "dice-1.png";
    case 2:
      return "dice-2.png";
    case 3:
      return "dice-3.png";
    case 4:
      return "dice-4.png";
    case 5:
      return "dice-5.png";
    case 6:
      return "dice-6.png";
  }
};

inatialize();

for (let i = 0; i < btn.length; i++)
  btn[i].addEventListener("click", function () {
    if (btn[i].classList.contains("btn--new")) {
      inatialize();
      total = 0;
      current = 0;
      activePlayer = 0;
    }
    if (btn[i].classList.contains("btn--roll")) {
      random = randomNum();
      diceimg.src = `${changediceimg(random)}`;
      if (random === 1) {
        current = 0;
        currentscore[activePlayer].textContent = `${current}`;
        player[activePlayer].classList.remove("player--active");
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        player[activePlayer].classList.add("player--active");
      } else {
        current = current + random;
        currentscore[activePlayer].textContent = `${current}`;
      }
    }
    if (btn[i].classList.contains("btn--hold")) {
      total = Number(totalscore[activePlayer].textContent);
      total = total + current;
      current = 0;
      currentscore[activePlayer].textContent = `${current}`;
      totalscore[activePlayer].textContent = `${total}`;
      if (total >= 100) {
        player[activePlayer].classList.add("player--winner");
      } else {
        player[activePlayer].classList.remove("player--active");
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        player[activePlayer].classList.add("player--active");
        console.log(activePlayer);
      }
    }
  });
