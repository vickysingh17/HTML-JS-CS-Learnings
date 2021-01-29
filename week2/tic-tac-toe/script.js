const restartBtn = document.querySelector('.gameRestart');
const cellElements = document.querySelectorAll('.cell');
const gameStatus = document.querySelector('.gameStatus');
const gameContainer = document.querySelector('.gameContainer');
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
let cellState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let currentPlayer = "X";

gameStatus.innerHTML = `Player ${currentPlayer} Turn`;

const cellClickedHandler = (eventObject) => {
    let cellClicked = eventObject.target;
    //console.log(cellClicked);
    //console.log(cellClicked.getAttribute('data-cell-index'));
    let cellIndex = cellClicked.getAttribute('data-cell-index');
    //console.log('CELLINDEX+++++++++++      ' + cellIndex)
    if(cellState[cellIndex]!=="" || !gameActive){
        return;
    }
    //console.log('hello');
    cellState[cellIndex] = currentPlayer;
    console.log(cellState);
    cellClicked.innerHTML = currentPlayer;
    console.log(cellClicked);
    // checking if the after the placement of X the combination is a winning combination
    let roundWon = false;
    for(let i=0 ; i<winningCombinations.length ; i++) {
        let a = cellState[winningCombinations[i][0]];
        let b = cellState[winningCombinations[i][1]];
        let c = cellState[winningCombinations[i][2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        console.log(roundWon);
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }
    if(roundWon) {
        gameActive = false;
        gameStatus.innerHTML = `Player ${currentPlayer} Won`;
        return;
    }

    let roundDraw = !cellState.includes("");
    if (roundDraw) {
        gameStatus.innerHTML = `Nobody Won`;
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    console.log('PlayerStatus   ' + currentPlayer);
    gameStatus.innerHTML = `Player ${currentPlayer} turn`;
}
gameContainer.addEventListener('click', cellClickedHandler);

 
const restartEventHandler = () => {
    gameActive = true;
    cellState = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X"
    cellElements.forEach(cell => cell.innerHTML = "");
    gameStatus.innerHTML = `Player ${currentPlayer} Turn`;
}
restartBtn.addEventListener('click', restartEventHandler);