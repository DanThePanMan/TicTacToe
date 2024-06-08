const gameboard = (function () {
    const board = [[null, null, null],[null, null, null],[null, null, null]];
    const circle = (x,y) => {board[x][y] = 'O'};
    const cross = (x,y) => {board[x][y] = 'X'};
    const reset = () => {this.board = [[null, null, null],[null, null, null],[null, null, null]];}

    const viewBoard = () => {return board};

    const traverse = (direction, count, type, xIndex, yIndex, board) => {
        //direction has 8 possibilities 
        //this is recurseive
        //l,r,u,d,ul,ur,dl,dr

        //base case
        if(count === 2){
            return(type);
        }
        else if(board(xIndex, yIndex) != type){
            return('n')
        }
        else{
            switch(direction){
                case "l":
                    return(traverse("l", count+1, type, xIndex-1, yIndex, board));
                case "r":
                    return(traverse("r", count+1, type, xIndex+1, yIndex, board));
                case "u":
                    return(traverse("u", count+1, type, xIndex, yIndex+1, board));
                case "d":
                    return(traverse("d", count+1, type, xIndex, yIndex-1, board));
                case "ul":
                    return(traverse("ul", count+1, type, xIndex-1, yIndex+1, board));
                case "ur":
                    return(traverse("ur", count+1, type, xIndex+1, yIndex+1, board));
                case "dl":
                    return(traverse("dl", count+1, type, xIndex-1, yIndex-1, board));
                case "dr":
                    return(traverse("dr", count+1, type, xIndex+1, yIndex-1, board));
            }   
        }
    };


    const verifyWin = (board) => {

        const isFullOfNonNull = (array) => {
            for (let i = 0; i < array.length; i++) {
                for (let j = 0; j < array[i].length; j++) {
                    if (array[i][j] === null) {
                        return false; // If any element is null, return false
                    }
                }
            }
            return true; // If all elements are non-null, return true
        };
        
        //fix this so it checks every time you traverse
        const tempResults = []

        //top left
        tempResults.push(traverse("d", 0, board[0][0], 0, 0, board));
        tempResults.push(traverse("dr", 0, board[0][0], 0, 0, board));
        tempResults.push(traverse("r", 0, board[0][0], 0, 0, board));
        //top middle
        tempResults.push(traverse("l", 0, board[0][0], 0, 0, board));
        tempResults.push(traverse("dl", 0, board[0][0], 0, 0, board));
        tempResults.push(traverse("d", 0, board[0][0], 0, 0, board));
        tempResults.push(traverse("dr", 0, board[0][0], 0, 0, board));
        tempResults.push(traverse("r", 0, board[0][0], 0, 0, board));
        //top right
        tempResults.push(traverse("l", 0, board[0][0], 0, 0, board));
        tempResults.push(traverse("dl", 0, board[0][0], 0, 0, board));
        tempResults.push(traverse("d", 0, board[0][0], 0, 0, board));







        if(tempResults.contain('X')){
            return 'X'
        }
        else if(tempResults.contain('O')){
            return 'O'
        }
        else if(isFullOfNonNull(board)){
            return 'draw'
        }
        else{
            return 'continue'
        }

        
    };
    return({ circle, cross, viewBoard, verifyWin, reset })
})();


function gameController(gameboard, player){
    console.log(gameboard);
    console.log(gameboard.verifyWin());
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

//main

let currentPlayer = "X";
while(gameboard.verifyWin() === 'continue'){

}

gameController(gameboard.viewBoard());