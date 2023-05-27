// Variables
var diceDom = document.querySelector(".dice");
var activePlayer;
var scores;
var roundScore;
var isNewGame;
initGame();

// Function that initiate
function initGame() {
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  isNewGame = true;

  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;

  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  diceDom.style.display = "none";

  document.getElementById("name-0").textContent = "PLAYER 1";
  document.getElementById("name-1").textContent = "PLAYER 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}

// Function that change player
function changePlayer() {
  roundScore = 0;

  document.getElementById("current-" + activePlayer).textContent = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  diceDom.style.display = "none";
}

//Eventlisteners for roll button
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";
    diceDom.src = "img/dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      changePlayer();
    }
  }
});

//Eventlisteners for hold button
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame === true) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      isNewGame = false;
    } else {
      changePlayer();
    }
  }
});

//Eventlisteners for new game button
document.querySelector(".btn-new").addEventListener("click", initGame);
