let squareAmount = 16;
const container = document.querySelector(".container");
const drawingZone = document.createElement("div");

drawingZone.setAttribute("id", "drawing-zone");
container.appendChild(drawingZone);

function createSquareGrid(squareAmount) {
  for (let i = 0; i < squareAmount ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${squareAmount})`;
    drawingZone.appendChild(square);
  }
}

createSquareGrid(squareAmount);
