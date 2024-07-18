

const { calculate } = require('./calculator');

describe('calculate function tests', () => {
    test('adds two positive numbers', () => {
        expect(calculate('add', 5, 3)).toBe(8);
    });

    test('adds two negative numbers', () => {
        expect(calculate('add', -5, -3)).toBe(-8);
    });

    test('adds a positive number and a negative number', () => {
        expect(calculate('add', 5, -3)).toBe(2);
    });

    test('subtracts two positive numbers', () => {
        expect(calculate('subtract', 5, 3)).toBe(2);
    });

    test('subtracts two negative numbers', () => {
        expect(calculate('subtract', -5, -3)).toBe(-2);
    });

    test('subtracts a positive number and a negative number', () => {
        expect(calculate('subtract', 5, -3)).toBe(8);
    });

    test('multiplies two positive numbers', () => {
        expect(calculate('multiply', 5, 3)).toBe(15);
    });

    test('multiplies two negative numbers', () => {
        expect(calculate('multiply', -5, -3)).toBe(15);
    });

    test('multiplies a positive number and a negative number', () => {
        expect(calculate('multiply', 5, -3)).toBe(-15);
    });

    test('divides two positive numbers', () => {
        expect(calculate('divide', 6, 3)).toBe(2);
    });

    test('divides two negative numbers', () => {
        expect(calculate('divide', -6, -3)).toBe(2);
    });

    test('divides a positive number and a negative number', () => {
        expect(calculate('divide', 6, -3)).toBe(-2);
    });

    test('handles division by zero', () => {
        expect(calculate('divide', 5, 0)).toBeNull();
    });

    test('handles invalid operation', () => {
        expect(calculate('invalid', 5, 3)).toBeNull();
    });
});