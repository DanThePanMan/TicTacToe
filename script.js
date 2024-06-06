const gameboard = (function () {
    const board = [[],[],[]];
    const circle = (x,y) => {board[x][y] = 'O'};
    const cross = (x,y) => {board[x][y] = 'X'};
    const viewBoard = () => {return board};

    //use methods in verifyTool to traverse the board
    const verifyTool = checkBoard(board);


    const verifyWin = () => {
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                //this part checks each direciton.
                //left and right first
                switch(j){
                    case 0:
                        break
                    case 1:

                }

            }
        }


    };
    return({ circle, cross, viewBoard, verifyWin })
})();


function createPlayer(){

}