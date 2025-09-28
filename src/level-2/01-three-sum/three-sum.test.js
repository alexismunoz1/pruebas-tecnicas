const threeSum = require('./three-sum.challenge');

describe('3Sum', () => {
    test('caso básico', () => {
        const result = threeSum([-1,0,1,2,-1,-4]);
        expect(result).toEqual(expect.arrayContaining([
            [-1,-1,2],
            [-1,0,1]
        ]));
        expect(result).toHaveLength(2);
    });

    test('sin solución', () => {
        expect(threeSum([0,1,1])).toEqual([]);
    });

    test('todos ceros', () => {
        expect(threeSum([0,0,0])).toEqual([[0,0,0]]);
    });

    test('array pequeño', () => {
        expect(threeSum([1,2,3])).toEqual([]);
    });

    test('con duplicados', () => {
        const result = threeSum([-2,0,1,1,2]);
        expect(result).toEqual(expect.arrayContaining([
            [-2,0,2],
            [-2,1,1]
        ]));
    });
});
