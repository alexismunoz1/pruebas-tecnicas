const reverseString = require('./reverse-string.challenge');

describe('Reverse String', () => {
    test('caso básico', () => {
        const s = ["h","e","l","l","o"];
        reverseString(s);
        expect(s).toEqual(["o","l","l","e","h"]);
    });

    test('string con mayúsculas', () => {
        const s = ["H","a","n","n","a","h"];
        reverseString(s);
        expect(s).toEqual(["h","a","n","n","a","H"]);
    });

    test('string de un carácter', () => {
        const s = ["a"];
        reverseString(s);
        expect(s).toEqual(["a"]);
    });

    test('string vacío', () => {
        const s = [];
        reverseString(s);
        expect(s).toEqual([]);
    });
});
