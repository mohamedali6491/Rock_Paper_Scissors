const rps=["Rock","Paper","Scissors"];

function computerPlay() {
    let computerSelect=rps[Math.floor(Math.random() * rps.length)];
    console.log(computerSelect);
}
computerPlay();