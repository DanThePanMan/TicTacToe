const gameboard = (function () {
    const board = [[],[],[]];
    const circle = (x,y) => {board[x][y] = 'O'};
    const cross = (x,y) => {board[x][y] = 'X'};
    const viewBoard = () => {return board};
    const verifyWin = () => {};
    return({ board, circle, cross, viewBoard })
})();

function createPlayer(){

}