// Defining Kelvin degrees values in Celsius.
const kelvin = 47;

// Defining Celsius degrees in relation to Kelvin(s)
const celsius = kelvin - 273;

// Fahrenheit degrees conversion formula

let fahrenheit = celsius * (9/5) + 32;

// Rounding up the values stored in the variable
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Celsius degrees conversion formula

let newton = celsius * (33/100);

// Rounding up the values stored in the variable
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);