/**
 * This program is a boliler plate code for the famous tic tac toe game
 * Here box represents one placeholder for either X or a 0
 * We have a 2D array to represent the arrangement of X or O is a grid
 * 0 -> empty box
 * 1 -> box with X
 * 2 -> box with O
 *
 * Below are the tasks which needs to be completed
 * Imagine you are playing with Computer so every alternate move should be by Computer
 * X -> player
 * O -> Computer
 *
 * Winner has to be decided and has to be flashed
 *
 * Extra points will be given for the Creativity
 *
 * Use of Google is not encouraged
 *
 */
const grid = [];
const GRID_LENGTH = 3;
let turn = 'X';
let count = 0;

function initializeGrid() {
    for (let colIdx = 0;colIdx < GRID_LENGTH; colIdx++) {
        const tempArray = [];
        for (let rowidx = 0; rowidx < GRID_LENGTH;rowidx++) {
            tempArray.push(0);
        }
        grid.push(tempArray);
    }
}

function getRowBoxes(colIdx) {
    let rowDivs = '';

    for(let rowIdx=0; rowIdx < GRID_LENGTH ; rowIdx++ ) {
        let additionalClass = 'darkBackground';
        let content = '';
        const sum = colIdx + rowIdx;
        if (sum%2 === 0) {
            additionalClass = 'lightBackground'
        }
        const gridValue = grid[colIdx][rowIdx];
        if(gridValue === 1) {
            content = '<span class="cross">X</span>';
        }
        else if (gridValue === 2) {
            content = '<span class="cross">O</span>';
        }
        rowDivs = rowDivs + '<div colIdx="'+ colIdx +'" rowIdx="' + rowIdx + '" class="box ' +
            additionalClass + '">' + content + '</div>';
    }
    return rowDivs;
}

function getColumns() {
    let columnDivs = '';
    for(let colIdx=0; colIdx < GRID_LENGTH; colIdx++) {
        let coldiv = getRowBoxes(colIdx);
        coldiv = '<div class="rowStyle">' + coldiv + '</div>';
        columnDivs = columnDivs + coldiv;
    }
    return columnDivs;
}

function renderMainGrid() {
    const parent = document.getElementById("grid");
    const columnDivs = getColumns();
    parent.innerHTML = '<div class="columnsStyle">' + columnDivs + '</div>';
}

function checkWon(rowIdx, colIdx){
  for(let i=0;i<GRID_LENGTH-2;i++){
    if((grid[i][rowIdx]+grid[i+1][rowIdx]+grid[i+2][rowIdx])%3===0 && grid[i][rowIdx] && grid[i+1][rowIdx] && grid[i+2][rowIdx]){
      grid[i][rowIdx]===1 ? alert("Player X won") : alert("Player O Won");
      document.location.reload();
    }
    else if((grid[colIdx][i]+grid[colIdx][i+1]+grid[colIdx][i+2])%3===0 && grid[colIdx][i] && grid[colIdx][i+1] && grid[colIdx][i+2]){
      grid[colIdx][i]===1 ? alert("Player X won") : alert("Player O Won");
      document.location.reload();
    }
    else if ((grid[i][i]+grid[i+1][i+1]+grid[i+2][i+2])%3===0 && grid[i][i] && grid[i+1][i+1] && grid[i+2][i+2]) {
      grid[i][i]===1 ? alert("Player X won") : alert("Player O Won");
      document.location.reload();
    }
    else if ((grid[i][GRID_LENGTH-i-1]+grid[i+1][GRID_LENGTH-i-2]+grid[i+2][GRID_LENGTH-i-3])%3===0 && grid[i][GRID_LENGTH-i-1] && grid[i+1][GRID_LENGTH-i-2] && grid[i+2][GRID_LENGTH-i-3]) {
      grid[i][GRID_LENGTH-i-1]===1 ? alert("Player X won") : alert("Player O Won");
      document.location.reload();
    }
  }
}

function onBoxClick() {
    var rowIdx = this.getAttribute("rowIdx");
    var colIdx = this.getAttribute("colIdx");

    if(grid[colIdx][rowIdx]!=0){
      return;
    }
    count++;
    let newValue = 1;
    if(count%2===0){
      newValue=2
    }
    if(count>=9){
      alert("Game Tied, PLay Again");
      document.location.reload();
    }
    grid[colIdx][rowIdx] = newValue;
    renderMainGrid();
    checkWon(rowIdx,colIdx);
    addClickHandlers();
}

function addClickHandlers() {
    var boxes = document.getElementsByClassName("box");

    for (var idx = 0; idx < boxes.length; idx++) {
        boxes[idx].addEventListener('click', onBoxClick, false);
    }
}

initializeGrid();
renderMainGrid();
addClickHandlers();
