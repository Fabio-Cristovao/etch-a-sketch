
const siteContainer = document.querySelector('.container')
const submitButton = document.querySelector(".submit-button");
let randomColorBtn = document.querySelector(".random");
let clearBtn = document.querySelector('.clear');
let gridContainer = document.createElement('div');
siteContainer.appendChild(gridContainer);
const input = document.querySelector(".input");
console.log(submitButton);
console.log(input);

submitButton.addEventListener('click', makeRows, false);

randomColorBtn.addEventListener('click', ChangeRandomColor, false)
clearBtn.addEventListener('click', clearGameContainer, false);

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
}

function changeColorBlack(e) {
  e.target.style.backgroundColor = 'black';
}

function ChangeRandomColor(e) {
  console.log('rainbow button clicked');
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', changeRandomColor, false)
    console.log(item);
  })
  console.log();
};

function clearColor(e) {
  e.target.style.backgroundColor = 'white';
}

function clearGameContainer(e) {
  console.log(clearBtn);
  makeRows(e);
};

function changeRandomColor() {
  console.log('function executed!');
  let gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.addEventListener('mouseenter', getRandomColor, false)
  })
}

function getRandomColor(e) {
  console.log(e.target);
  e.target.style.backgroundColor = chooseRandomColor();
}

function chooseRandomColor() {
  let colors = [
    '#D84B20',
    '#FFD65E',
    '#7BC8A4',
    '#4C6EAD',
    '#735CDD',
    '#C281B5',
  ];

  let randomColor = Math.floor(Math.random() * colors.length);
  console.log(randomColor);
  return colors[randomColor];
}
















