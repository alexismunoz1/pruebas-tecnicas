const twoSum = require('./two-sum');

describe('Two Sum', () => {
    test('caso básico', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('números en posiciones diferentes', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test('mismos números', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    test('números negativos', () => {
        expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
    });

    test('array pequeño', () => {
        expect(twoSum([1, 2], 3)).toEqual([0, 1]);
    });
});
