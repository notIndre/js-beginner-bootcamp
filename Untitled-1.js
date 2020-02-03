//kelvinTemp is a variable for temperature in Kelvin on a given day

let kelvinTemp = 301;

// Celsius temperature is always Kelvin - 273.15 degrees

const celsiusTemp = kelvinTemp - 273.15;

// this is the formula for Fahrenheit, that's been rounded down using Math.floor()

const fahrenheitTemp = Math.floor(celsiusTemp * (9/5) + 32);

console.log("Today's temperature is " + fahrenheitTemp + " degrees Fahrenheit.")
