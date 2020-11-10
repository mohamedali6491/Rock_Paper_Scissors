window.onload = function () {
    let rps = ["rock", "paper", "scissors"];
    let a = "";
    let b = "";
    let result;
    let playerCounter = 0;
    let computerCounter = 0;
    let playerRes=0;
    let computerRes=0;
    let x=0;
    let y=0;
    let z;

    function computerPlay() {
        let cS = rps[Math.floor(Math.random() * rps.length)];
        return cS;
    }

    function play(playerSelection, computerSelection) {


        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                result = "You Lose! Paper beats Rock";
                ++computerCounter;
            }
            else if (computerSelection == "scissors") {
                result = "You Win! Rock beats Scissors";
                ++playerCounter;
            }
            else if (computerSelection == "rock") {
                result = "This is a tie";

            }
        }

        if (playerSelection == "paper") {
            if (computerSelection == "paper") {
                result = "This is a tie";
            }
            else if (computerSelection == "scissors") {
                result = "You Lose! Scissors beats Paper";
                ++computerCounter;
            }
            else if (computerSelection == "rock") {
                result = "You Win! Paper beats Rock";
                ++playerCounter;
            }
        }
        if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                result = "You Win! Scissors beats Paper";
                ++playerCounter;
            }
            else if (computerSelection == "scissors") {
                result = "This is a tie";
            }
            else if (computerSelection == "rock") {
                result = "You Lose! Rock beats Scissors";
                ++computerCounter;
            }
        }
        return result;
    }

    function game() {
        let res = "";
        for (let i = 1; i <= 5; i++) {
            a = window.prompt("select rock, paper or scissors");
            a = a.toLowerCase();
            if(a=="rock" || a=="paper" || a=="scissors"){
            b = computerPlay();
            res = play(a, b);
            console.log(res);
            console.log("Score is player: " + playerCounter + " - computer: " + computerCounter);
            }else{
            console.log("enter one of the three values only");  
            continue;
        }
        }

    }

    function gameGui(){
       
    }
   
    
}
