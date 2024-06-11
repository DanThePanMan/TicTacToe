const gameboard = (function () {
    let board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ];
    const circle = (x, y) => {
        board[x][y] = "O";
    };
    const cross = (x, y) => {
        board[x][y] = "X";
    };
    const reset = () => {
        board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    };

    const viewBoard = () => {
        return board;
    };

    const editBoard = (changedBoard) => {
        board = changedBoard;
    };

    const verifyWin = (board) => {
        //check rows, then columns, then diagnoals, then check is full of non null to make sure no draw

        //check rown
        for (let row = 0; row < 3; row++) {
            if (
                board[row][0] !== null &&
                board[row][0] === board[row][1] &&
                board[row][1] === board[row][2]
            ) {
                return board[row][0]; // Return the marker of the winner
            }
        }
        //check columns
        for (let col = 0; col < 3; col++) {
            if (
                board[0][col] !== null &&
                board[0][col] === board[1][col] &&
                board[1][col] === board[2][col]
            ) {
                return board[0][col]; // Return the marker of the winner
            }
        }
        // Check diagonals
        if (
            board[0][0] !== null &&
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2]
        ) {
            return board[0][0]; // Return the marker of the winner
        }
        if (
            board[0][2] !== null &&
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0]
        ) {
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
    return { circle, cross, viewBoard, editBoard, verifyWin, reset };
})();

function toggle(player) {
    if (player === "X") {
        return "O";
    } else if (player === "O") {
        return "X";
    } else {
        throw new Error("invalid player value to toggle");
    }
}

function putSymbol(array, symbol, row, col) {
    if (array[row][col] != null) {
        return false;
    } else {
        array[row][col] = symbol;
        return true;
    }
}

const displayController = (function () {
    const gridItemList = document.querySelectorAll(".gridItem");

    //create 2d array of DOM elements

    // laying things on the board

    const update = () => {
        for (let i = 0; i < 9; i++) {
            gridItemList[i].innerHTML = "";
        }
        const DomBoard = [
            [gridItemList[0], gridItemList[1], gridItemList[2]],
            [gridItemList[3], gridItemList[4], gridItemList[5]],
            [gridItemList[6], gridItemList[7], gridItemList[8]],
        ];
        const board = gameboard.viewBoard();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "X") {
                    const X = document.createElement("img");
                    X.setAttribute("src", "./assets/X.png");
                    X.classList.add("inGridItem");
                    DomBoard[i][j].appendChild(X);
                } else if (board[i][j] === "O") {
                    const O = document.createElement("img");
                    O.setAttribute("src", "./assets/O.png");
                    O.classList.add("inGridItem");
                    DomBoard[i][j].appendChild(O);
                }
            }
        }
    };

    const resetBoard = () => {
        gameboard.reset();
        update();
    };

    const changeTurnIndicator = (symbol) => {
        const logoContainer = document.querySelector(".logoContainer");
        logoContainer.innerHTML = ""
        if(symbol === "X"){
            const X = document.createElement("img");
            X.setAttribute("src", "./assets/X.png");
            X.classList.add("inContainerItem");
            logoContainer.appendChild(X)
        }
        else{
            const O = document.createElement("img");
            O.setAttribute("src", "./assets/O.png");
            O.classList.add("inContainerItem");
            logoContainer.appendChild(O)
        }
    }

    const displayWinMessage = () => {
        console.log(gameboard.verifyWin(gameboard.viewBoard()))
    }

    const listen = (currentSymbol) => {
        const DomBoard = [
            [gridItemList[0], gridItemList[1], gridItemList[2]],
            [gridItemList[3], gridItemList[4], gridItemList[5]],
            [gridItemList[6], gridItemList[7], gridItemList[8]],
        ];
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
            
                DomBoard[row][col].addEventListener("click", () => {
                    if(addSymbol(row, col, currentSymbol)){
                        currentSymbol = toggle(currentSymbol);
                    };
                    displayWinMessage();//this is temporary
                });
            
                
            }
        }
    };

    //add X or O
    const addSymbol = (row, col, symbol) => {
        const tempBoard = gameboard.viewBoard();
        if(tempBoard[row][col] === null){
            tempBoard[row][col] = symbol;
            gameboard.editBoard(tempBoard);
            changeTurnIndicator(symbol);
            update();

            //check win here 

            return true
        }
        return false
    };

    //winHandler
    const winHandler = () => {
        if (gameboard.verifyWin(gameboard.viewBoard()) != "continue") {
        }
    };

    return {resetBoard, listen, winHandler };
})();




displayController.listen("X");
