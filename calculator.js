// Simple Calculator in JavaScript

// Function to perform basic arithmetic operations
module.exports = {
    calculate: function(operation, num1, num2) {
        switch (operation) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                if (num2 === 0) {
                    console.log("Cannot divide by zero.");
                    return null;
                }
                return num1 / num2;
            default:
                console.log("Invalid operation.");
                return null;
        }
    }
};

// Example usage
// const operation = 'add'; // Can be 'add', 'subtract', 'multiply', 'divide'
// const num1 = 5;
// const num2 = 3;

// const result = calculate(operation, num1, num2);

// if (result !== null) {
//     console.log(`Result: ${result}`);
// }

