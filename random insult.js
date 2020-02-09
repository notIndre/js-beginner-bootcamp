const randomBodyParts = ['arm', 'leg', 'head', 'toe', 'back'];
const randomAdjectives = ['funny', 'ugly', 'limp', 'wonky', 'weird'];
const randomWords = ['bird', 'oven', 'candle', 'spoon', 'flower'];

const randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];
const randomAdjective = randomAdjectives[Math.floor(Math.random() * 5)];
const randomWord = randomWords[Math.floor(Math.random() * 5)];

console.log('Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord + '!!!');