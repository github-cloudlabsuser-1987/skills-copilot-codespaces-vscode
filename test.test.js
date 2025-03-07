const Calculator = require('./test');

// filepath: /workspaces/skills-copilot-codespaces-vscode/test.test.js

describe('Calculator', () => {
    let calc;

    beforeEach(() => {
        calc = new Calculator();
    });

    test('should add two numbers correctly', () => {
        expect(calc.add(10, 5)).toBe(15);
    });

    test('should subtract two numbers correctly', () => {
        expect(calc.subtract(10, 5)).toBe(5);
    });

    test('should multiply two numbers correctly', () => {
        expect(calc.multiply(10, 5)).toBe(50);
    });

    test('should divide two numbers correctly', () => {
        expect(calc.divide(10, 5)).toBe(2);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow("Division by zero is not allowed.");
    });
});