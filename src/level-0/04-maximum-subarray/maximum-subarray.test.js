const maxSubArray = require('./maximum-subarray');

describe('Maximum Subarray', () => {
    test('caso básico', () => {
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    });

    test('array de un elemento', () => {
        expect(maxSubArray([1])).toBe(1);
    });

    test('todos positivos', () => {
        expect(maxSubArray([5,4,-1,7,8])).toBe(23);
    });

    test('todos negativos', () => {
        expect(maxSubArray([-5,-4,-1,-7,-8])).toBe(-1);
    });

    test('array pequeño', () => {
        expect(maxSubArray([1,2])).toBe(3);
    });
});
