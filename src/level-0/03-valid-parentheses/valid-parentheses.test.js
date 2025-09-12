const isValid = require('./valid-parentheses');

describe('Valid Parentheses', () => {
    test('paréntesis simples', () => {
        expect(isValid("()")).toBe(true);
    });

    test('múltiples tipos', () => {
        expect(isValid("()[]{}")).toBe(true);
    });

    test('paréntesis no coincidentes', () => {
        expect(isValid("(]")).toBe(false);
    });

    test('orden incorrecto', () => {
        expect(isValid("([)]")).toBe(false);
    });

    test('string vacío', () => {
        expect(isValid("")).toBe(true);
    });

    test('solo paréntesis abiertos', () => {
        expect(isValid("(((")).toBe(false);
    });
});
