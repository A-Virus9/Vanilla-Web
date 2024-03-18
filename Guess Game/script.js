"use strict";

let body = document.querySelector("body");
let hiddenNum = document.querySelector(".numBox");
let guess = document.querySelector(".guessBox");
let actualNumber = Math.ceil(Math.random() * 20);
let reset = document.querySelector(".reset");
let check = document.querySelector(".check");
let status = document.querySelector(".status");

let score = document.querySelector(".score");
let scoreVal = 20;

let highscore = document.querySelector(".highscore");
let highscoreVal = 0;

let endState = false;

const handleCheck = () => {
  if(endState == false) {
    if (guess.value > 20 || guess.value < 1) {
      status.innerText = "❌ Invalid Number";
    } 
    else if (guess.value > actualNumber) {
      status.innerText = "📈 Too High!";
      scoreVal -= 1;
    } 
    else if (guess.value < actualNumber) {
      status.innerText = "📉 Too Low!";
      scoreVal -= 1;
    } 
    else {
      status.innerText = "🎉 Correct Number!";
      highscoreVal < scoreVal ? (highscoreVal = scoreVal) : 1;
    }
  }

  score.innerText = `💯 Score: ${scoreVal}`;
  highscore.innerText = `🎖️ Highscore: ${highscoreVal}`;

  if (scoreVal !== 0 && status.innerText == "🎉 Correct Number!") {
    body.style.backgroundColor = "rgb(130, 197, 29)";
    guess.style.backgroundColor = "rgb(130, 197, 29)";
    endState = true;
    hiddenNum.innerText = actualNumber;
  } 
  else if (scoreVal === 0) {
    body.style.backgroundColor = "rgb(209, 43, 43)";
    guess.style.backgroundColor = "rgb(209, 43, 43)";
    status.innerText = "🎉 You lost!";
    endState = true;
    hiddenNum.innerText = actualNumber;
  }
};

const handleReset = () => {
    endState = false;
    scoreVal = 20;
    score.innerText = `💯 Score: ${scoreVal}`;
    actualNumber = Math.ceil(Math.random() * 20);
    body.style.backgroundColor = "#252525";
    guess.style.backgroundColor = "#252525";
    console.log(actualNumber);
    hiddenNum.innerText = "?";
}

check.addEventListener("click", () => handleCheck());
reset.addEventListener("click", () => handleReset());