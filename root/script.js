let secretNumber = generateRandomNumber();

    function generateRandomNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    function checkGuess(userGuess) {
        const resultElement = document.getElementById('result');

        if (userGuess === secretNumber) {
            displayResult("Congratulations! You guessed the correct number.", 'correct');
        } else {
            displayResult(`Sorry, try again. The correct number is ${secretNumber}.`, 'incorrect');
        }

        // Generate a new random number for the next round
        secretNumber = generateRandomNumber();

        setTimeout(() => {
            resultElement.className = ''; // Reset the class after a delay
        }, 2000);
    }

    function displayResult(message, resultClass) {
        const resultElement = document.getElementById('result');
        resultElement.innerText = message;
        resultElement.className = resultClass;
    }
