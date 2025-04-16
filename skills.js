// function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Driver code
const celsius = 25; // Example temperature in Celsius
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius}°C is equal to ${fahrenheit}°F`); // Output: 25°C is equal to 77°F