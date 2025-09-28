const missingNumber = require('./missing-number.challenge');

describe('Missing Number', () => {
    test('caso básico', () => {
        expect(missingNumber([3,0,1])).toBe(2);
    });

    test('array de dos elementos', () => {
        expect(missingNumber([0,1])).toBe(2);
    });

    test('array más largo', () => {
        expect(missingNumber([9,6,4,2,3,5,7,0,1])).toBe(8);
    });

    test('falta el 0', () => {
        expect(missingNumber([1,2,3])).toBe(0);
    });

    test('array de un elemento', () => {
        expect(missingNumber([0])).toBe(1);
    });
});
