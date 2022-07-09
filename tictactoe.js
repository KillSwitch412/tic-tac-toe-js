var player = 1;

var columnsValues = document.getElementsByClassName("TicTacToeColumns");
var infoArea = document.getElementById("infoDIV");

var turns = 0;

var gameWon = false;
var gameDrawn = false;
var playerWon = '';

function inputData(place) {

    if(gameWon == true || gameDrawn == true) {
        return;
    }

    if (columnsValues[place].innerHTML != "X" && columnsValues[place].innerHTML != "O")
    {

        if(player == 1) {
            columnsValues[place].innerHTML = "X";
            turns++;
            player = 2;

            infoArea.innerHTML = "Player 2's turn (O)"
        } else {
            columnsValues[place].innerHTML = "O";
            turns++;
            player = 1;

            infoArea.innerHTML = "Player 1's turn (X)"
        }

    } else {
        
        if (player == 1) {
            infoArea.innerHTML = "Player 1: Already pressed!!";
        } else {
            infoArea.innerHTML = "Player 2: Already pressed!!";
        }
        
    }

    // checking columns
    for(var i = 0; i < 9; i = i + 3) {
        
        if (columnsValues[i].innerHTML == columnsValues[i + 1].innerHTML && columnsValues[i + 1].innerHTML == columnsValues[i + 2].innerHTML)
        {
            gameWon = true;
            playerWon = columnsValues[i].innerHTML;
        }

    }

    //checking rows
    for(var i = 0; i < 3; i++) {

        if (columnsValues[i].innerHTML == columnsValues[i + 3].innerHTML && columnsValues[i + 3].innerHTML == columnsValues[i + 6].innerHTML)
        {
            gameWon = true;
            playerWon = columnsValues[i].innerHTML;
        }        

    }

    // checking main diagonal
    if (columnsValues[0].innerHTML == columnsValues[4].innerHTML && columnsValues[4].innerHTML == columnsValues[8].innerHTML) {
        gameWon = true;
        playerWon = columnsValues[0].innerHTML;
    }
    
    // checking secondary diagonal
    if (columnsValues[2].innerHTML == columnsValues[4].innerHTML && columnsValues[4].innerHTML == columnsValues[6].innerHTML) {
        gameWon = true;
        playerWon = columnsValues[2].innerHTML;
    }

    // checking for Draw
    if (turns == 9 && gameWon == false) {
        gameDrawn = true;

        infoArea.innerHTML = "Game Drawn";
    }

    if(gameWon == true) {

        if (playerWon == 'X') {
            infoArea.innerHTML = "Player 1 (X) Won";
        } else if (playerWon == 'O') {
            infoArea.innerHTML = "Player 2 (O) Won";
        }

    }
}


// reset game
function resetGame() {

    player = 1;

    gameWon = false;
    gameDrawn = false;

    turns = 0;

    playerWon = '';

    for(var i = 0; i < 9; i++) {
        columnsValues[i].innerHTML = "<span style='font-size: 18px; font-weight: 500;'>" + (i + 1) +"</span>";
    }

    infoArea.innerHTML = "Info here";
}