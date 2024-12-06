let squareAmount = 16;
const container = document.querySelector(".container");
const drawingZone = document.createElement("div");
const buttonsDiv = document.createElement("div");
const resetButton = document.createElement("button");
const clearButton = document.createElement("button");

drawingZone.setAttribute("id", "drawing-zone");
container.appendChild(drawingZone);

resetButton.textContent = "RESET";
clearButton.textContent = "CLEAR";
buttonsDiv.setAttribute("id", "buttons");
buttonsDiv.appendChild(resetButton);
buttonsDiv.appendChild(clearButton);
container.appendChild(buttonsDiv);

function createSquareGrid(squareAmount) {
  for (let i = 0; i < squareAmount ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${squareAmount})`;
    drawingZone.appendChild(square);
    square.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = "black";
    });
  }
}

function changeSquareAmount() {
  squareAmount = prompt("Choose a new grid size from 1 to 100");

  if (
    squareAmount != null &&
    !isNaN(parseInt(squareAmount)) &&
    squareAmount >= 1 &&
    squareAmount <= 100
  ) {
    const gridSquares = document.querySelectorAll(".square");
    gridSquares.forEach((gridSquare) => {
      gridSquare.remove();
    });
    createSquareGrid(squareAmount);
  }
}

resetButton.addEventListener("click", changeSquareAmount);
createSquareGrid(squareAmount);
