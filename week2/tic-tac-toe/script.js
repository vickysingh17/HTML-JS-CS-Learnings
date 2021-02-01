const restartBtn = document.getElementById('gameRestartBtn');
const cellElements = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('gameStatus');
const gameContainer = document.getElementById('gameContainer');
const helpSymbol = document.getElementById('helpSymbol');
const popUpWindow = document.getElementById('popUpWindow');
const closeButton = document.getElementById('closeButton');
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let cellState = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let currentPlayer = 'X';

gameStatus.innerHTML = `Player ${currentPlayer} Turn`;

helpSymbol.addEventListener('click', () => {
  popUpWindow.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  popUpWindow.style.display = 'none';
});

const cellClickedHandler = eventObject => {
  let cellClicked = eventObject.target;
  let cellIndex = cellClicked.getAttribute('data-cell-index');
  if (cellState[cellIndex] !== '' || !gameActive) {
    return;
  }
  cellState[cellIndex] = currentPlayer;
  cellClicked.innerHTML = currentPlayer;
  // checking if the after the placement of X the combination is a winning combination
  let isWinner = false;
  for (let i = 0; i < winningCombinations.length; i++) {
    let a = cellState[winningCombinations[i][0]];
    let b = cellState[winningCombinations[i][1]];
    let c = cellState[winningCombinations[i][2]];
    if (a === '' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      isWinner = true;
      break;
    }
  }
  if (isWinner) {
    gameActive = false;
    gameStatus.innerHTML = `Player ${currentPlayer} Won`;
    return;
  }

  let noWinner = !cellState.includes('');
  if (noWinner) {
    gameStatus.innerHTML = `Nobody Won`;
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  gameStatus.innerHTML = `Player ${currentPlayer} turn`;
};
gameContainer.addEventListener('click', cellClickedHandler);

const restartEventHandler = () => {
  gameActive = true;
  cellState = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  cellElements.forEach(cell => (cell.innerHTML = ''));
  gameStatus.innerHTML = `Player ${currentPlayer} Turn`;
};
restartBtn.addEventListener('click', restartEventHandler);
