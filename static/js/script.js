let userScore = 0;
let computerScore = 0;

let mode = "";
let targetWins = 0;

const emojis = {

    rock: "🪨",
    paper: "📄",
    scissors: "✂️"

};

/* SET GAME MODE */

function setMode(selectedMode){

    resetGame();

    mode = selectedMode;

    if(mode === "3"){

        targetWins = 2;

        document.getElementById("modeText").innerHTML =
        "🔥 BEST OF 3 MODE";

    }

    else if(mode === "5"){

        targetWins = 3;

        document.getElementById("modeText").innerHTML =
        "⚡ BEST OF 5 MODE";

    }

    else{

        targetWins = Infinity;

        document.getElementById("modeText").innerHTML =
        "♾️ INFINITE MODE";
    }
}

/* PLAY GAME */

function play(userChoice){

    /* POPUP IF MODE NOT SELECTED */

    if(mode === ""){

        document.getElementById("modePopup")
        .classList.remove("hidden");

        return;
    }

    const choices =
    ["rock","paper","scissors"];

    const computerChoice =
    choices[Math.floor(Math.random() * 3)];

    /* SHOW SYMBOLS */

    document.getElementById("userChoice").innerHTML =
    emojis[userChoice];

    document.getElementById("computerChoice").innerHTML =
    emojis[computerChoice];

    let result = "";

    /* GAME LOGIC */

    if(userChoice === computerChoice){

        result = "🤝 DRAW MATCH";

    }

    else if(

        (userChoice === "rock" &&
        computerChoice === "scissors") ||

        (userChoice === "paper" &&
        computerChoice === "rock") ||

        (userChoice === "scissors" &&
        computerChoice === "paper")

    ){

        userScore++;

        result = "🔥 YOU WIN THIS ROUND";

    }

    else{

        computerScore++;

        result = "🤖 AI WINS THIS ROUND";
    }

    /* UPDATE UI */

    document.getElementById("resultText").innerHTML =
    result;

    document.getElementById("userScore").innerHTML =
    userScore;

    document.getElementById("computerScore").innerHTML =
    computerScore;

    /* CHECK WINNER */

    checkWinner();
}

/* CHECK MATCH WINNER */

function checkWinner(){

    /* INFINITE MODE NEVER ENDS */

    if(mode === "infinite"){

        return;
    }

    /* USER WINS */

    if(userScore >= targetWins){

        document.getElementById("winnerPopup")
        .classList.remove("hidden");

        document.getElementById("winnerMessage")
        .innerHTML =
        "🎉 CONGRATULATIONS!<br>YOU WON THE MATCH!";
    }

    /* AI WINS */

    else if(computerScore >= targetWins){

        document.getElementById("winnerPopup")
        .classList.remove("hidden");

        document.getElementById("winnerMessage")
        .innerHTML =
        "🤖 AI WON THE MATCH!";
    }
}

/* CLOSE WINNER POPUP */

function closePopup(){

    document.getElementById("winnerPopup")
    .classList.add("hidden");

    resetGame();
}

/* RESET GAME */

function resetGame(){

    userScore = 0;
    computerScore = 0;

    document.getElementById("userScore").innerHTML = 0;

    document.getElementById("computerScore").innerHTML = 0;

    document.getElementById("userChoice").innerHTML =
    "⚡";

    document.getElementById("computerChoice").innerHTML =
    "🤖";

    document.getElementById("resultText").innerHTML =
    "Choose Your Move";
}

/* CLOSE MODE POPUP */

function closeModePopup(){

    document.getElementById("modePopup")
    .classList.add("hidden");
}