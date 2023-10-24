  // generating random integers within specific ranges
var min = 1500;
var max = 2000;
const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

var min2 = 2000;
var max2 = 3000;
const randomInteger2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;

// Get HTML elements by their IDs
var bird1 = document.getElementById("bird1");
var bird2 = document.getElementById("bird2");
var message = document.getElementById("message");
var mydiv = document.getElementById('mydiv');
var mydiv2 = document.getElementById('mydiv2');
var score = 0;
var gameStarted = false; // Variable to track if the game has started

// Variables for different page URLs based on score 
var failPage = "fail.html";
var bronzePage = "bronze.html";
var silverPage = "silver.html";
var goldPage = "gold.html";

var intervalBird1;
var intervalBird2;

// Function to start the game
function start() {
    // Set gameStarted to true when the game starts
    gameStarted = true;
    // Set intervals for changing  the bird images at random times 
    intervalBird1 = setInterval(() => {
        bird1.src = "two.png";
        setTimeout(() => {
            bird1.src = "bird1.png";
        }, 500);
    }, randomInteger);

    intervalBird2 = setInterval(() => {
        bird2.src = "two.png";
        setTimeout(() => {
            bird2.src = "bird1.png";
        }, 1500);
    }, randomInteger2);

    // Clear the intervals after 20 seconds
    setTimeout(() => {
        clearInterval(intervalBird1);
        clearInterval(intervalBird2);

        // Save the score to local storage
        localStorage.setItem("score", score);

        // Redirect to different pages based on the score
        if (score < 1) {
            window.location.href = failPage;
        } else if (score < 6) {
            window.location.href = bronzePage;
        } else if (score < 11) {
            window.location.href = silverPage;
        } else {
            window.location.href = goldPage;
        }
    }, 20000); // 20000 milliseconds = 20 seconds
}

// Function to handle bird1 score depending on what colour bird 
function tuesday() {
    // Check if the game has started
    if (gameStarted) {
        // Check if the bird1 image ends with "two.png" and update the score accordingly
        if (bird1.src.endsWith("two.png")) {
            score++;
            bird1.src = "bird1.png";
        } else {
            score--;
        }
        message.textContent = "Score: " + score;
    }
}

// Function to handle bird2 score depending on what colour bird
function wednesday() {
    // Check if the game has started
    if (gameStarted) {
        if (bird2.src.endsWith("two.png")) {
            score++;
            bird2.src = "bird1.png";
        } else {
            score--;
        }
        message.textContent = "Score: " + score;
    }
}



document.body.addEventListener("click", function(event) {
    // Check if the clicked element is not one of the bird divs and the game has not started
    if ((event.target !== bird1 && event.target !== bird2) && !gameStarted) {
        alert("Please click on the 'Start' button to play the game!");
    }
});
