const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const GRID_OUTLINE = '#000';

// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  // Square size
  let padding = 0;

  // vertical lines
  for (let x = 0; x <= width; x += 50) {
    context.moveTo(x + padding, padding);
    context.lineTo(x + padding, height + padding);
  }

  // horizontal lines
  for (let x = 0; x <= height; x += 50) {
    context.moveTo(padding, x + padding);
    context.lineTo(width + padding, x + padding);
  }
  context.strokeStyle = 'black';
  context.stroke();
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();
