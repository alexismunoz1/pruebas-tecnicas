const containsDuplicate = require('./contains-duplicate.challenge');

describe('Contains Duplicate', () => {
    test('con duplicados', () => {
        expect(containsDuplicate([1,2,3,1])).toBe(true);
    });

    test('sin duplicados', () => {
        expect(containsDuplicate([1,2,3,4])).toBe(false);
    });

    test('múltiples duplicados', () => {
        expect(containsDuplicate([1,1,1,3,3,4,3,2,4,2])).toBe(true);
    });

    test('array de dos elementos iguales', () => {
        expect(containsDuplicate([1,1])).toBe(true);
    });

    test('array de dos elementos diferentes', () => {
        expect(containsDuplicate([1,2])).toBe(false);
    });
});
