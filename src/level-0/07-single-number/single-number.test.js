const singleNumber = require('./single-number');

describe('Single Number', () => {
    test('caso básico', () => {
        expect(singleNumber([2,2,1])).toBe(1);
    });

    test('array más largo', () => {
        expect(singleNumber([4,1,2,1,2])).toBe(4);
    });

    test('array de un elemento', () => {
        expect(singleNumber([1])).toBe(1);
    });

    test('array de tres elementos', () => {
        expect(singleNumber([1,2,1])).toBe(2);
    });

    test('números negativos', () => {
        expect(singleNumber([-1,-1,-2])).toBe(-2);
    });
});
