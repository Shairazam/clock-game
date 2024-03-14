const clock = document.getElementById("Clock");
// console.log(clock);

setInterval(function () {
  const date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

/////////////////
//  Game Guess Number in javascript
/////////////////

let RanNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const Userinp = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".guesses");
const remGueese = document.querySelector(".last_result");
const lowOrhi = document.querySelector(".lowOrhigh");
const GameOver = document.querySelector(".resultpare");

const p = document.createElement("p");
// i have made extra styling just for learning purpose
p.style.fontSize = "20px";
p.style.background = "purple";
p.style.width = "260px";
p.style.borderRadius = "5px";
p.style.cursor = "pointer";

let preGuess = [];
let numGues = 1;
let playGam = true;

if (playGam) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(Userinp.value);
    console.log(guess);
    valigues(guess);
  });
}

function valigues(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid Number");
  } else if (guess < 1) {
    alert("Please Enter number more than one ");
  } else if (guess > 100) {
    alert("Please Enter a Number Less than 100");
  } else {
    preGuess.push(guess);
    if (numGues === 5) {
      displayguess(guess);
      displaymessage(`Game over Random number was ${RanNum}`);
      EndGame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess) {
  if (guess === RanNum) {
    displaymessage(`you Guess it Right`);
    EndGame();
  } else if (guess < RanNum) {
    displaymessage("Your Guess is too low");
  } else if (guess > RanNum) {
    displaymessage(`Your Guess is too High`);
  }
}

function displayguess(guess) {
  Userinp.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGues++;
  remGueese.innerHTML = `${5 - numGues}`;
}
function displaymessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function EndGame() {
  Userinp.value = "";
  Userinp.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id='newGame'>Start new Game</h2>`;
  GameOver.appendChild(p);
  playGam = false;
  newGame();
}

function newGame() {
  const newGamebtn = document.querySelector("#newGame");
  newGamebtn.addEventListener("click", function (e) {
    RanNum = parseInt(Math.random() * 100 + 1);
    preGuess = [];
    numGues = 1;
    guessSlot.innerHTML = "";
    remGueese.innerHTML = `${5 - numGues}`;
    Userinp.removeAttribute("disabled");
    GameOver.removeChild(p);
    playGam = true;
  });
}
