let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let gameOver = false;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartButton = document.getElementById("restartButton");

function checkGuess() {
    if (gameOver) {
        return;
    }

    const value = guessInput.value.trim();
    const guess = Number(value);

    if (
        value === "" ||
        !Number.isInteger(guess) ||
        guess < 1 ||
        guess > 100
    ) {
        message.textContent = "Enter a whole number from 1 to 100!";
        message.style.color = "#f87171";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === secretNumber) {
        message.textContent =
            `🎉 Correct! You won in ${attempts} attempts!`;

        message.style.color = "#4ade80";

        gameOver = true;
        guessButton.disabled = true;
        guessInput.disabled = true;
        restartButton.hidden = false;

    } else if (guess < secretNumber) {
        message.textContent = "📈 Too low! Try a higher number.";
        message.style.color = "#facc15";

    } else {
        message.textContent = "📉 Too high! Try a lower number.";
        message.style.color = "#fb923c";
    }

    if (!gameOver) {
        guessInput.value = "";
        guessInput.focus();
    }
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;

    attemptsDisplay.textContent = "0";
    message.textContent = "Good luck! 🍀";
    message.style.color = "white";

    guessInput.value = "";
    guessInput.disabled = false;

    guessButton.disabled = false;
    restartButton.hidden = true;

    guessInput.focus();
}

guessButton.addEventListener("click", checkGuess);

guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

restartButton.addEventListener("click", restartGame);