// Select elements
let scoreA = document.getElementById("scoreA");
let scoreB = document.getElementById("scoreB");
let increaseA = document.getElementById("increaseA");
let increaseB = document.getElementById("increaseB");

// Initialize scores
let teamAScore = 0;
let teamBScore = 0;

// Add event listeners for buttons
increaseA.addEventListener("click", function() {
    teamAScore++;
    scoreA.textContent = teamAScore;
});

increaseB.addEventListener("click", function() {
    teamBScore++;
    scoreB.textContent = teamBScore;
});
