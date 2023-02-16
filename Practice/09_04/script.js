/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".container");
const anyBoxInTheGrid = document.querySelector(".cell");

// //// 2. function expression
// const changeColorCopy = function(copySelector, copyColor) {
//   document.querySelector(copySelector).style.color = copyColor;
// };

gridContainer.addEventListener("mouseenter", () => {
  gridContainer.style.outline = "2px solid #449ead";
});
gridContainer.addEventListener("mouseleave", () => {
  gridContainer.style.outline = "";
});

const changeColor = function() {
  anyBoxInTheGrid.style.backgroundColor = "#8bc34a";
};

// Get all cells
const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventlisteners aplenty
gridCells.forEach((cell) => {
  // Set outline when cell is hovered
  cell.addEventListener("mouseenter", (e) => {
    console.log(e);
    cell.style.outline = "4px solid blue";
    cell.style.backgroundColor = "#449ead";
    cell.style.borderRadius = "1px";
  });
});

anyBoxInTheGrid.forEach((cell) => {

  cell.addEventListener('click', event => {
    cell.classList.toggle("clicked");
    // anyBoxInTheGrid.addEventListener('keydown', changeColor);
  });

});

anyBoxInTheGrid.addEventListener('click', event => {
  anyBoxInTheGrid.classList.toggle("clicked");
  // anyBoxInTheGrid.addEventListener('keydown', changeColor);
});

anyBoxInTheGrid.addEventListener('keydown', logKey);

function logKey(e) {
  console.log("hey");
};