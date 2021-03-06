const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const GRID_OUTLINE = '#000';
// Square size
const padding = 0;

// generates a random number for the treasure
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10) * 50;
};

// Iteration 1
function drawGrid() {
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

  context.strokeStyle = GRID_OUTLINE;
  context.stroke();
}

// Iteration 2 - Character Class

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  moveUp() {
    if (this.row > 0) {
      this.row -= 50;
    }
  }
  moveRight() {
    if (this.col < 450) {
      this.col += 50;
    }
  }
  moveDown() {
    if (this.row < 450) {
      this.row += 50;
    }
  }
  moveLeft() {
    if (this.col > 0) {
      this.col -= 50;
    }
  }
  direction = 'down';
  score = 0;
}

const player = new Character(0, 0);

// Iteration 3 - Drawing the Player

function drawPlayer() {
  // redraws grid to simulate movement
  context.clearRect(0, 0, width, width);
  drawGrid();

  let playerSprite = new Image();
  playerSprite.src = '/images/character-down.png';

  switch (player.direction) {
    case 'left':
      playerSprite.src = '/images/character-left.png';
      break;
    case 'up':
      playerSprite.src = '/images/character-up.png';
      break;
    case 'right':
      playerSprite.src = '/images/character-right.png';
      break;
    case 'down':
      playerSprite.src = '/images/character-down.png';
      break;
  }
  /*
  const playerSprite = new Image();
  playerSprite.src = '/images/character-down.png';
*/
  // do this in order to prevent the image not loading on the page
  playerSprite.addEventListener('load', () => {
    // how to keep the ration in the images
    const width = playerSprite.width;
    const height = playerSprite.height;
    const ratio = width / height;

    context.drawImage(playerSprite, player.col, player.row, 50, 50 / ratio);
  });
}

// Iteration 4
console.log('hello world');
class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  setRandomPosition() {
    this.col = generateRandomNumber();
    this.row = generateRandomNumber();
  }
}

const treasure = new Treasure(generateRandomNumber(), generateRandomNumber());

function drawTreasure() {
  // redraws grid to simulate movement
  context.clearRect(0, 0, width, width);
  drawGrid();

  const treasureSprite = new Image();
  treasureSprite.src = '/images/treasure.png';

  // do this in order to prevent the image not loading on the page
  treasureSprite.addEventListener('load', () => {
    // how to keep the ration in the images
    const width = treasureSprite.width;
    const height = treasureSprite.height;
    const ratio = width / height;

    context.drawImage(treasureSprite, treasure.col, treasure.row, 50, 50 / ratio);
  });
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

drawEverything();

// Iteration 5

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log('left');
      player.direction = 'left';
      player.moveLeft();
      break;
    case 38:
      console.log('up');
      player.direction = 'up';
      player.moveUp();
      break;
    case 39:
      console.log('right');
      player.direction = 'right';
      player.moveRight();
      break;
    case 40:
      console.log('down');
      player.direction = 'down';
      player.moveDown();
      break;
  }

  drawEverything();
});
