function play(userChoice){

    let choices = ['rock','paper','scissors'];

    let computerChoice = choices[Math.floor(Math.random()*3)];

    let result = "";

    if(userChoice === computerChoice){
        result = "It's a Draw!";
    }

    else if(
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ){
        result = "You Win!";
    }

    else{
        result = "Computer Wins!";
    }

    document.getElementById("resultText").innerHTML =
    `
    You: ${userChoice}<br>
    Computer: ${computerChoice}<br><br>
    ${result}
    `;
}