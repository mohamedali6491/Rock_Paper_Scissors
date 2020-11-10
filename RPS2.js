window.onload = function () {
    let rps = ["rock", "paper", "scissors"];
    const result=document.querySelector('#result');
    const score=document.querySelector('#score');
    const btns=document.querySelectorAll('.box');
    const reset=document.querySelector('#reset');
    let playerScore = 0;
    let computerScore = 0;
    

    function computerPlay() {
        let cS = rps[Math.floor(Math.random() * rps.length)];
        return cS;
    }

    function finish(s){
        if(s=="player"){
            result.textContent='Winner is Player';
        }
        if(s=="computer"){
            result.textContent='Winner is Computer';
        }
    }

    function play(playerSelection, computerSelection) {


        if (playerSelection == "rock" && (playerScore!=5 && computerScore!=5)) {
            if (computerSelection == "paper") {
                result.innerHTML = "You Lose! Paper beats Rock";
                ++computerScore;
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;
                if(playerScore==5){
                    finish("player");
                }else if(computerScore==5){
                    finish("computer");
                }
            }
            else if (computerSelection == "scissors") {
                result.innerHTML = "You Win! Rock beats Scissors";
                ++playerScore;
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;
                if(playerScore==5){
                    finish("player");
                }else if(computerScore==5){
                    finish("computer");
                }
            }
            else if (computerSelection == "rock") {
                result.innerHTML = "This is a tie";
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;

            }
        }

        if (playerSelection == "paper" && (playerScore!=5 && computerScore!=5)) {
            if (computerSelection == "paper") {
                result.innerHTML = "This is a tie";
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;
            }
            else if (computerSelection == "scissors") {
                result.innerHTML = "You Lose! Scissors beats Paper";
                ++computerScore;
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;
                if(playerScore==5){
                    finish("player");
                }else if(computerScore==5){
                    finish("computer");
                }
            }
            else if (computerSelection == "rock") {
                result.innerHTML = "You Win! Paper beats Rock";
                ++playerScore;
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;
                if(playerScore==5){
                    finish("player");
                }else if(computerScore==5){
                    finish("computer");
                }
            }
        }
        if (playerSelection == "scissors" && (playerScore!=5 && computerScore!=5)) {
            if (computerSelection == "paper") {
                result.innerHTML = "You Win! Scissors beats Paper";
                ++playerScore;
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;
                if(playerScore==5){
                    finish("player");
                }else if(computerScore==5){
                    finish("computer");
                }
            }
            else if (computerSelection == "scissors") {
                result.innerHTML = "This is a tie";
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;
            }
            else if (computerSelection == "rock") {
                result.innerHTML = "You Lose! Rock beats Scissors";
                ++computerScore;
                score.innerHTML = `Score: Player: ${playerScore} - Computer: ${computerScore}`;
                if(playerScore==5){
                    finish("player");
                }else if(computerScore==5){
                    finish("computer");
                }
            }
        }
    }

    
    btns.forEach((button) => {
        
        button.addEventListener("click", () => {
            reset.innerHTML="Reset";
            score.style.fontSize = "x-large";
            score.style.fontWeight="bold";
            result.style.fontSize = "x-large";
            result.style.fontWeight="bold";
            play(button.id, computerPlay());
        });
    });

    reset.addEventListener('click',()=>{
        score.innerHTML = "Score: Player: 0 - Computer: 0";
        result.innerHTML = "play the game";
        reset.innerHTML="Play";
    });
    
}
