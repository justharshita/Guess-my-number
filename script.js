"use strict";
/*document.querySelector(".guess").value = 19;
console.log(document.querySelector(".guess").value);
*/
/*
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
*/
let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const dismsg = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector(".message").textContent = "No Text Entered!!👀";
    dismsg("No Text Entered!!👀");
  } else if (guess === secretnumber) {
    dismsg("you did it!!😎");
    document.querySelector(".number").textContent = secretnumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =guess > secretnumber ? "too high": "too low";
      dismsg(guess > secretnumber ? "too high" : "too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "ouch! you lost";
      dismsg("ouch you lost!!");
      document.querySelector(".score").textContent = 0;
    }
  } /*else if (guess < secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "ouch! you lost";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".");
    }
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "ouch! you lost";
      document.querySelector(".score").textContent = 0;
    }
  }*/
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  //document.querySelector(".message").textContent = "Start guessing...";
  dismsg("start guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
