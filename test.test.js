const Calculator = require('./test.js');

// test.test.js

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should initialize result to 0', () => {
        expect(calculator.getResult()).toBe(0);
    });

    test('should add a number correctly', () => {
        calculator.add(10);
        expect(calculator.getResult()).toBe(10);
    });

    test('should subtract a number correctly', () => {
        calculator.add(10);
        calculator.subtract(5);
        expect(calculator.getResult()).toBe(5);
    });

    test('should multiply a number correctly', () => {
        calculator.add(10);
        calculator.multiply(2);
        expect(calculator.getResult()).toBe(20);
    });

    test('should divide a number correctly', () => {
        calculator.add(10);
        calculator.divide(2);
        expect(calculator.getResult()).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(0)).toThrow('Cannot divide by zero.');
    });

    test('should reset the result to 0', () => {
        calculator.add(10);
        calculator.reset();
        expect(calculator.getResult()).toBe(0);
    });

    test('should return the current result', () => {
        calculator.add(15);
        expect(calculator.getResult()).toBe(15);
    });
});