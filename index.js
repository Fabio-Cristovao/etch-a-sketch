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

// add an event listener for each time mouse enters and leaves a grid item
const gridItems = document.querySelectorAll('.grid-item');
console.log(gridItems);
gridItems.forEach(gridItem => gridItem.addEventListener('mouseenter', changeColor));
gridItems.forEach(gridItem => gridItem.addEventListener('mouseleave', changeColor));

// change the background color of the grid item
function changeColor(e) {
  e.target.style.backgroundColor = 'black';
}

// create a grid of divs
function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    container.appendChild(div);
  }
}

// create a grid of 16 x 16 divs





