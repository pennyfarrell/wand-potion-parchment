window.onload = function () {
    // Set the scores to 0 when the page loads
    document.getElementById("your-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
};

function playGame(playerChoice) {
    // Determine computer choice randomly
    const computerChoice = Math.random() < 0.5 ? "wand" : "potion";

    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (playerChoice === "wand" && computerChoice === "potion") {
        result = "You win!";
        document.getElementById("your-score").innerHTML = parseInt(document.getElementById("your-score").innerHTML) + 1;
    } else if (playerChoice === "potion" && computerChoice === "parchment") {
        result = "You win!";
        document.getElementById("your-score").innerHTML = parseInt(document.getElementById("your-score").innerHTML) + 1;
    } else if (playerChoice === "parchment" && computerChoice === "wand") {
        result = "You win!";
        document.getElementById("your-score").innerHTML = parseInt(document.getElementById("your-score").innerHTML) + 1;
    } else {
        result = "You lose!";
        document.getElementById("computer-score").innerHTML = parseInt(document.getElementById("computer-score").innerHTML) + 1;
    }

    // Update results on the page
    document.querySelector(".results").innerHTML = `You chose ${playerChoice}. <br> The wizard chose ${computerChoice}. <br> ${result}`;
}

// Event listener for button click
document.getElementById("wand-button").addEventListener("click", () => playGame("wand"));
document.getElementById("potion-button").addEventListener("click", () => playGame("potion"));
document.getElementById("parchment-button").addEventListener("click", () => playGame("parchment"));

// Add event listener for reset button
document.querySelector(".reset button").addEventListener("click", () => {
    document.getElementById("your-score").innerHTML = 0;
    document.getElementById("computer-score").innerHTML = 0;
});