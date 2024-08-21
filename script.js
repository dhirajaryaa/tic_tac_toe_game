console.log("Welcome to Game Tic Tac Toe");
let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let turn = "X";

// Function to change the turn
const changeTurn = () => {
  return turn = turn ===  "X" ? "0" : "X";
};

// Function to check for a win
const checkWinner = (e) => {
  console.log(e);
  
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".boxtext");
  box.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      changeTurn();
      turnMusic.play();
      checkWinner();
      document.getElementsByClassName("info")[0].innerHTML = `Turn for ${turn}`;
    }
  });
});
