let NumberGueesed = document.getElementById('input');
let OUTPUT = document.getElementById('Attempt');
let res = document.getElementById('result');

// Initialize the random number and total attempts
let number = randomNumber_Generator();
let totalAttempt = 10;  // Start with 10 attempts globally

// Function to generate a random number between 1 and 100
function randomNumber_Generator() {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Add event listener to handle 'Enter' keypress
NumberGueesed.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        AddInput(number);  // Pass the random number
    }
});

// Function to handle the input and game logic
function AddInput(randomnum) {
    
    if (NumberGueesed.value.trim() === '') {
        alert('Enter a value first');
    } else {
        // Check if there are attempts left
        if (totalAttempt > 0) {
            totalAttempt -= 1;  // Decrement attempts

            // Add the guessed number to the output
            let chosenone = document.createElement('h1');
            chosenone.style.marginLeft = '6px';  
            chosenone.textContent = Number(NumberGueesed.value);  // Convert input to number
            OUTPUT.appendChild(chosenone);

            // Check if the guess is correct
            if (Number(NumberGueesed.value) === randomnum) {
                res.textContent = 'You Won!!!!';
                NumberGueesed.disabled = true;  // Disable further input after winning
            } else {
                if (totalAttempt > 0) {
                    res.textContent = `Attempts left: ${totalAttempt}`;
                } else {
                    res.textContent = 'You Lose!!!!';
                    NumberGueesed.disabled = true;  // Disable input after losing
                }
            }

            // Call Completed_attempt function to log previous attempts
            Completed_attempt();

            // Clear the input field after adding
            NumberGueesed.value = '';
        }
    }
}

// Function to log all previously attempted guesses
function Completed_attempt() {
    const attemted_list = [];
    OUTPUT.querySelectorAll('h1').forEach((element) => {
        attemted_list.push(element.textContent.trim());
    });
    console.log(attemted_list);
}

// Function to reset the game
function resetGame() {
    number = randomNumber_Generator();  // Generate a new random number
    totalAttempt = 10;  // Reset the attempts
    res.textContent = '';  // Clear the result message
    OUTPUT.innerHTML = '';  // Clear previous attempts
    NumberGueesed.disabled = false;  // Enable the input
    NumberGueesed.value = '';  // Clear input field
}
