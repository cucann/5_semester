const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

const ROWS = 20; // Высота поля
const COLUMNS = 10; // Ширина поля
const BLOCK_SIZE = 30; // Размер блока

const COLORS = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500'];

let board = Array.from({ length: ROWS }, () => Array(COLUMNS).fill(null)); // Игровое поле
let currentPiece;
let score = 0;
let level = 1;

const pieces = [
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1], [1, 1]], // O
  [[1, 1, 0], [0, 1, 1]], // S
  [[0, 1, 1], [1, 1, 0]], // Z
  [[1, 1, 1, 1]], // I
  [[1, 0, 0], [1, 1, 1]], // L
  [[0, 0, 1], [1, 1, 1]], // J
];

function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      if (board[row][col]) {
        ctx.fillStyle = board[row][col];
        ctx.fillRect(col * BLOCK_SIZE, row * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    }
  }
}

function drawPiece() {
  const { shape, x, y, color } = currentPiece;
  ctx.fillStyle = color;
  shape.forEach((row, i) => {
    row.forEach((block, j) => {
      if (block) {
        ctx.fillRect((x + j) * BLOCK_SIZE, (y + i) * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
      }
    });
  });
}

function createPiece() {
  const rand = Math.floor(Math.random() * pieces.length);
  const shape = pieces[rand];
  const color = COLORS[rand];
  return { shape, x: Math.floor(COLUMNS / 2) - Math.floor(shape[0].length / 2), y: 0, color };
}

function movePiece() {
  const { shape, x, y } = currentPiece;
  currentPiece.y++;

  if (isCollision()) {
    currentPiece.y--;
    placePiece();
    clearLines();
    currentPiece = createPiece();
    if (isCollision()) {
      gameOver();
    }
  }
}

function isCollision() {
  const { shape, x, y } = currentPiece;
  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j]) {
        const newX = x + j;
        const newY = y + i;
        if (newX < 0 || newX >= COLUMNS || newY >= ROWS || (board[newY] && board[newY][newX])) {
          return true;
        }
      }
    }
  }
  return false;
}

function placePiece() {
  const { shape, x, y, color } = currentPiece;
  for (let i = 0; i < shape.length; i++) {
    for (let j = 0; j < shape[i].length; j++) {
      if (shape[i][j]) {
        board[y + i][x + j] = color;
      }
    }
  }
}

function clearLines() {
  for (let row = ROWS - 1; row >= 0; row--) {
    if (board[row].every(cell => cell !== null)) {
      board.splice(row, 1);
      board.unshift(Array(COLUMNS).fill(null));
      score += 100;
      level = Math.floor(score / 1000) + 1;
      document.getElementById('score').textContent = score;
      document.getElementById('level').textContent = level;
    }
  }
}

function gameOver() {
  alert('Game Over!');
  document.location.reload();
}

function gameLoop() {
  drawBoard();
  drawPiece();
  movePiece();
  setTimeout(gameLoop, 1000 / level);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    currentPiece.x--;
    if (isCollision()) currentPiece.x++;
  } else if (e.key === 'ArrowRight') {
    currentPiece.x++;
    if (isCollision()) currentPiece.x--;
  } else if (e.key === 'ArrowDown') {
    movePiece();
  } else if (e.key === 'ArrowUp') {
    currentPiece.shape = rotatePiece(currentPiece.shape);
    if (isCollision()) currentPiece.shape = rotatePiece(currentPiece.shape, true);
  }
});

function rotatePiece(shape, reverse = false) {
  return shape[0].map((_, i) => shape.map(row => row[i])).reverse();
}

currentPiece = createPiece();
gameLoop();
