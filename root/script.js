let secretNumber = generateRandomNumber(1, 10);
let guessLimit = 3;
let score = 0;
let difficulty = 'easy';
document.getElementById('userGuess').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess(document.getElementById('userGuess').value);
    }
});

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(userGuess) {
    const resultElement = document.getElementById('result');

    if (userGuess === secretNumber) {
        score += 10;
        displayResult("Congratulations! You guessed the correct number. Your score is " + score, 'correct');
    } else {
        guessLimit -= 1;
        if (guessLimit > 0) {
            displayResult(`Sorry, try again. You have ${guessLimit} guesses left.`, 'incorrect');
        } else {
            displayResult(`Game over! The correct number was ${secretNumber}. Your final score is ${score}.`, 'gameover');
            guessLimit = difficulty === 'hard' ? 2 : 3; // Reset guess limit based on difficulty
            score = 0; // Reset score
        }
    }

    // Generate a new random number for the next round
    secretNumber = generateRandomNumber(1, difficulty === 'hard' ? 50 : 10);

    setTimeout(() => {
        resultElement.className = ''; // Reset the class after a delay
    }, 2000);
}

function changeDifficulty(newDifficulty) {
    difficulty = newDifficulty;
    guessLimit = difficulty === 'hard' ? 2 : 3; // Update guess limit based on new difficulty
    secretNumber = generateRandomNumber(1, difficulty === 'hard' ? 50 : 10); // Generate new number based on new difficulty

    // Update button colors
    document.getElementById('easy').style.backgroundColor = newDifficulty === 'easy' ? '#2980b9' : '#3498db';
    document.getElementById('medium').style.backgroundColor = newDifficulty === 'medium' ? '#2980b9' : '#3498db';
    document.getElementById('hard').style.backgroundColor = newDifficulty === 'hard' ? '#2980b9' : '#3498db';
}

function displayResult(message, resultClass) {
    const resultElement = document.getElementById('result');
    resultElement.innerText = message;
    resultElement.className = resultClass;
}
