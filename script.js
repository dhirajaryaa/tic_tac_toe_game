console.log("Welcome to Game Tic Tac Toe");
let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOverMusic = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// Function to check for a win
const checkWinner = () => {
  let boxTests = document.getElementsByClassName("boxtext");
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxTests[e[0]].innerText === boxTests[e[1]].innerText &&
      boxTests[e[2]].innerText === boxTests[e[1]].innerText &&
      boxTests[e[0]].innerText !== ""
    ) {
      document.getElementsByClassName("info")[0].innerText = `Winner is ${
        boxTests[e[0]].innerText
      }`;
      isGameOver = true;
      gameOverMusic.play();
      document.querySelector(".imgBox").querySelector("img").style.width = "12vw"
    }
  });
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((box) => {
  let boxText = box.querySelector(".boxtext");
  box.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      turnMusic.play();
      checkWinner();
      !isGameOver
        ? (document.getElementsByClassName(
            "info"
          )[0].innerHTML = `Turn for ${turn}`)
        : "";
    }
  });
});
