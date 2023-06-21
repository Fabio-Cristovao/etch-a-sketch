
const siteContainer = document.querySelector('.container')
const submitButton = document.querySelector(".submit-button");
let clearBtn = document.querySelector('.clear');
let gridContainer = document.createElement('div');
siteContainer.appendChild(gridContainer);
const input = document.querySelector(".input");
console.log(submitButton);
console.log(input);

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
clearBtn.addEventListener('click', clearGameContainer, false);

function changeColor(e) {
  e.target.style.backgroundColor = 'black';
}

function clearColor(e) {
  e.target.style.backgroundColor = 'white';
}

function clearGameContainer(e) {
  console.log(clearBtn);
  makeRows(e);

};












