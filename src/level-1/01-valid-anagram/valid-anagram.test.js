const isAnagram = require('./valid-anagram.challenge');

describe('Valid Anagram', () => {
    test('anagramas válidos', () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
    });

    test('no son anagramas', () => {
        expect(isAnagram("rat", "car")).toBe(false);
    });

    test('strings de diferente longitud', () => {
        expect(isAnagram("a", "ab")).toBe(false);
    });

    test('strings vacíos', () => {
        expect(isAnagram("", "")).toBe(true);
    });

    test('un carácter', () => {
        expect(isAnagram("a", "a")).toBe(true);
    });
});
