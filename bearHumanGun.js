function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput ==='human' || userInput === 'gun') {
        return userInput
    } else {
        console.log('ERROR! please choose either BEAR, HUMAN or GUN');
    } 
}

function getComputerChoice() {
    const index = Math.floor(Math.random() * 3);
    if (index === 0) {
        return 'bear';
    } else if (index === 1) {
        return 'human';
    } else {
        return 'gun';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie';
    };
    if (userChoice === 'human') {
        if (computerChoice === 'bear') {
            return 'Computer chose Bear, you lose!';
        } else {
            return 'Computer chose Gun, you win!';
        }
    };
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'Computer chose Gun, you lose!';
        } else {
            return 'Computer chose Human, you win!';
        }
    };
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Computer chose Human, you lose!';
        } else {
            return 'Computer chose Bear, you win!';
        }
    };
}

function playGame() {
    const promptUserChoice = prompt('Please choose bear, human, or gun');
    const userChoice = getUserChoice(promptUserChoice);
    const computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();