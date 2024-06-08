const gameboard = (function () {
    const board = [[null, null, null],[null, null, null],[null, null, null]];
    const circle = (x,y) => {board[x][y] = 'O'};
    const cross = (x,y) => {board[x][y] = 'X'};
    const reset = () => {this.board = [[null, null, null],[null, null, null],[null, null, null]];}

    const viewBoard = () => {return board};

    const verifyWin = (board) => {
        
        //check rows, then columns, then diagnoals, then check is full of non null to make sure no draw

        //check rown
        for(let row = 0; row < 3; row++){
            if (board[row][0] !== null && board[row][0] === board[row][1] && board[row][1] === board[row][2]) {
                return board[row][0]; // Return the marker of the winner
            }
        }
        //check columns
        for (let col = 0; col < 3; col++) {
            if (board[0][col] !== null && board[0][col] === board[1][col] && board[1][col] === board[2][col]) {
                return board[0][col]; // Return the marker of the winner
            }
        }
        // Check diagonals
        if (board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
            return board[0][0]; // Return the marker of the winner
        }
        if (board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
            return board[0][2]; // Return the marker of the winner
        }

        //check draw
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === null) {
                    return "continue"; // If any element is null, return continue   
                }
            }
        }
        return "draw"; // If all elements are non-null, return draw

        
    };
    return({ circle, cross, viewBoard, verifyWin, reset })
})();


function gameController(gameboard, player){
    console.log(gameboard.viewBoard());
}

function toggle(player){
    if(player === "X"){
        return("O");
    }
    else if(player === "O"){
        return("X");
    }
    else{
        throw new Error("invalid player value to toggle")
    }
}


const displayController = (function () {} )();





//main
let currentPlayer = "X";
    while(gameboard.verifyWin(gameboard.viewBoard()) === 'continue'){

}

gameController(gameboard);