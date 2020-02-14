const userName = prompt("What is your name?");

if (userName) {
    console.log("Hello " + userName);
} else {
    console.log("Hello!");
}

const userQuestion = prompt("Please ask a YES-NO question");

console.log(userName + " is asking: " + userQuestion);

const randomNumber = Math.floor(Math.random() * 10);

const eightBall = '';

switch (randomNumber) {
    case 0:
        eightBall = "It is certain";
        break;
    case 1:
        eightBall = "As I see it, yes";
        break;
    case 2:
        eightBall = "Reply hazy, try again";
        break;
    case 3:
        eightBall = "Don't count on it";
        break;
    case 4:
        eightBall = "It is decidedly so";
        break;
    case 5:
        eightBall = "Most likely";
        break;
    case 6:
        eightBall = "Ask again later";
        break;
    case 7:
        eightBall = "My reply is no";
        break;
    case 8:
        eightBall = "Without a doubt";
        break;
    default:
        eightBall = "Cannot predict now";
};

console.log("The 8-ball says: " + eightBall);
