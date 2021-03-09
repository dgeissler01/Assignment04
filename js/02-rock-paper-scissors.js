function displayTitle() {
    alert(`Let's play rock, paper, scissors.`);
}

function playGame() {

let choice = prompt(`Enter your choice as rock, paper, or scissors.`);

while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    alert(`Invalid Entry! let\'s try again`);
    playGame();
    break;
}

console.log(choice);
let roll = Math.floor(Math.random()*3);

    if (roll === 0) {
        let results = "rock";
        console.log(results);
    while(choice === "rock") {
        alert(`The other player has ${results} and you have ${choice}. It's a DRAW`);
        break;
        }
            if (results === "rock" && choice === "paper") {
                alert(`The other player has ${results} and you have ${choice}. You WIN.`);
        }   else if (results === "rock" && choice === "scissors") {
                alert(`The other player has ${results} and you have ${choice}. You LOSE.`);
        }   
    }   else if (roll === 1) {
        let results = "paper";
        console.log(results);
        while(choice === "paper") {
            alert(`The other player has ${results} and you have ${choice}. It's a DRAW`);
            break;
        }
            if (results === "paper" && choice === "scissors") {
                alert(`The other player has ${results} and you have ${choice}. You WIN.`);
        }   else if (results === "paper" && choice === "rock") {
                alert(`The other player has ${results} and you have ${choice}. You LOSE.`);
        } 
    
    }   else {
        let results = "scissors";
        console.log(results);
        while(choice === "scissors") {
            alert(`The other player has ${results} and you have ${choice}. It's a DRAW`);
            break;
        }
            if (results === "scissors" && choice === "rock") {
                alert(`The other player has ${results} and you have ${choice}. You WIN.`);
        }   else if (results === "scissors" && choice === "paper") {
                alert(`The other player has ${results} and you have ${choice}. You LOSE.`);
        } 
    } 
}
function shoot() {
    displayTitle();
    let playAgain = "yes";
    while (playAgain === "yes") {
        playGame();
        playAgain = prompt(`Do you want to play again? (yes or no)`);
    }
    alert(`Thanks for playing!`);
}
shoot();
