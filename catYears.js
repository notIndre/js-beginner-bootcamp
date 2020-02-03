// my current age
let myAge = 28;

// this value will change later
let earlyYears = 2;

// this accounts for the first two years of a cats life where they experience accelerated growth
earlyYears *= 25;

// my age minus the cat early years
let laterYears = myAge - 2;

// cats' development slows down after the first 2 years, and each year after that is worth 4 (rather than 25) years
laterYears *= 4;

// if we put the two stages together, we get human age in cat years
const myAgeInCatYears = earlyYears + laterYears;

// this is my name
const myName = "Indre";

console.log("My name is " + myName + ". I am " + myAge + " years old in human years, which is " + myAgeInCatYears + " years old in cat years.")