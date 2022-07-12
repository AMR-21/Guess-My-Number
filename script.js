"use strict";

const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const guessEl = document.querySelector(".guess");
const bodyEl = document.querySelector("body");
let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".btn-check").addEventListener("click", function () {
  const val = Number(guessEl.value);
  const highscore = Number(highScoreEl.textContent);
  if (score > 0)
    if (!val) messageEl.textContent = "⛔ No number!";
    else if (val === guessNumber) {
      messageEl.textContent = "🎉 Correct Number";
      numberEl.textContent = guessNumber;
      guessEl.disabled = true;
      bodyEl.style.backgroundColor = "#60b347";
      numberEl.style.width = "30rem";
      if (score > highscore) highScoreEl.textContent = score;
    } else {
      val > guessNumber
        ? (messageEl.textContent = "📈 Too high!")
        : (messageEl.textContent = "📉 Too low!");
      scoreEl.textContent = --score;
    }
  if (!score) {
    messageEl.textContent = "💥 You lost the game!";
    guessEl.disabled = true;
  }
});

document.querySelector(".btn-again").addEventListener("click", function () {
  scoreEl.textContent = "20";
  numberEl.textContent = "?";
  guessEl.value = "";
  messageEl.textContent = "Start guessing...";
  guessNumber = Math.floor(Math.random() * 20) + 1;
  guessEl.disabled = false;
  bodyEl.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
  score = 20;
});
