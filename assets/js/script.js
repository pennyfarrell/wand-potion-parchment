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
    result = "Sussy....It's a tie!";
    // Handle tie result
    document.getElementById("your-score").innerHTML = parseInt(document.getElementById("your-score").innerHTML);
    document.getElementById("computer-score").innerHTML = parseInt(document.getElementById("computer-score").innerHTML);
  } else if (playerChoice === "wand" && computerChoice === "potion") {
    result = "Wahoo - You win!";
    // Update player score
    document.getElementById("your-score").innerHTML = parseInt(document.getElementById("your-score").innerHTML) + 1;
  } else if (playerChoice === "potion" && computerChoice === "parchment") {
    result = "Woop woop - You win!";
    // Update player score
    document.getElementById("your-score").innerHTML = parseInt(document.getElementById("your-score").innerHTML) + 1;
  } else if (playerChoice === "parchment" && computerChoice === "wand") {
    result = "Yassss- You win!";
    // Update player score
    document.getElementById("your-score").innerHTML = parseInt(document.getElementById("your-score").innerHTML) + 1;
  } else {
    result = "Ugg sorry - You lose!";
    // Update computer score
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