// build a grid of 16 x 16 divs

// create a container div

const siteContainer = document.querySelector('.site-container')
let gridContainer = document.createElement('div');
siteContainer.appendChild(gridContainer);
const input = document.querySelector(".input");
const submitButton = document.querySelector(".submit-button");
console.log(submitButton);
console.log(input);

// identify the submit button to make call the function with the desired number of cells

function makeRows(e) {
  e.preventDefault();
  gridContainer.classList.add('game-container');
  siteContainer.appendChild(gridContainer);
  console.log(gridContainer);
  console.log("button clicked!");
  console.log(e.target);
  const numberOfCells = input.value;
  gridContainer.style.setProperty('--grid-rows', numberOfCells);
  gridContainer.style.setProperty('--grid-cols', numberOfCells);

  gridContainer.innerHTML = "";

  for (c = 0; c < (numberOfCells * numberOfCells); c++) {
    let cell = document.createElement("div");
    cell.classList.add("grid-item");
    gridContainer.appendChild(cell);
    cell.classList.add("grid-item");

    console.log(cell);
  };
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(gridItem => gridItem.addEventListener('mouseenter', changeColor, false));






}

submitButton.addEventListener('click', makeRows, false);

// add an event listener for each time mouse enters and leaves a grid item


// change the background color of the grid item
function changeColor(e) {
  console.log("cell entered");
  e.target.style.backgroundColor = 'black';
}

// create a grid of 16 x 16 divs





