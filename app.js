let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let resetbtn1 = document.querySelector("#resetbtn1");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turno = true; // true = O, false = X

const winpatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [3,4,5],
  [6,7,8],
  [2,4,6]
];

// Reset game
const resetGame = () => {
  turno = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

// Handle box clicks
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      // Player O
      box.innerText = "O";
      box.classList.add("o");
      turno = false;
    } else {
      // Player X
      box.innerText = "X";
      box.classList.add("x");
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

// Disable all boxes
const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

// Enable all boxes (clear board)
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.classList.remove("x", "o");
  }
};

// Show winner message
const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

// Check winner
const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText; 
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText; 

    if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
      console.log("Winner:", pos1Val);
      showWinner(pos1Val);
      return;
    }
  }
};

// Hook reset buttons
resetbtn.addEventListener("click", resetGame);
resetbtn1.addEventListener("click", resetGame);
