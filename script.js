const gameboard = (function () {
    const board = [[],[],[]];
    const circle = (x,y) => {board[x][y] = 'O'};
    const cross = (x,y) => {board[x][y] = 'X'};
    const viewBoard = () => {return board};

    //use methods in verifyTool to traverse the board
    const verifyTool = checkBoard(board);

    const traverse = (direction, count, type, xIndex, yIndex, board) => {
        //direction has 8 possibilities 
        //this is recurseive
        //l,r,u,d,ul,ur,dl,dr

        //base case
        if(count === 2){
            return(`${type} wins`);
        }
        else if(board(xIndex, yIndex) != type){
            return('none')
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


    const verifyWin = () => {
        let win = null;
        //no loops, just checks each one.

        //fix this so it checks every time you traverse

        //top left square
        traverse("d", 0, board[0][0], 0, 0, board);
        traverse("dr", 0, board[0][0], 0, 0, board);
        traverse("r", 0, board[0][0], 0, 0, board);

        //top middle square
        traverse("l", 0, board[0][0], 0, 0, board);
        traverse("dl", 0, board[0][0], 0, 0, board);
        traverse("d", 0, board[0][0], 0, 0, board);
        traverse("dr", 0, board[0][0], 0, 0, board);
        traverse("r", 0, board[0][0], 0, 0, board);

        //top right square
        traverse("l", 0, board[0][0], 0, 0, board);
        traverse("dl", 0, board[0][0], 0, 0, board);
        traverse("d", 0, board[0][0], 0, 0, board);


        

    };
    return({ circle, cross, viewBoard, verifyWin })
})();


function createPlayer(){

}