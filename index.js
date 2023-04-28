// build a grid of 16 x 16 divs

// create a container div
const container = document.createElement('div');
const gridContainer = document.querySelector(".site-container");
container.classList.add('container');
gridContainer.appendChild(container);

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
}

makeRows(16, 16);

// create a grid of divs
function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
  }
}

// create a grid of 16 x 16 divs





