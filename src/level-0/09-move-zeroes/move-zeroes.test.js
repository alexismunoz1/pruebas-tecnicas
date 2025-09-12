const moveZeroes = require('./move-zeroes');

describe('Move Zeroes', () => {
    test('caso básico', () => {
        const nums = [0,1,0,3,12];
        moveZeroes(nums);
        expect(nums).toEqual([1,3,12,0,0]);
    });

    test('array de un elemento', () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });

    test('sin ceros', () => {
        const nums = [1,2,3];
        moveZeroes(nums);
        expect(nums).toEqual([1,2,3]);
    });

    test('todos ceros', () => {
        const nums = [0,0,0];
        moveZeroes(nums);
        expect(nums).toEqual([0,0,0]);
    });

    test('ceros al final', () => {
        const nums = [1,2,3,0,0];
        moveZeroes(nums);
        expect(nums).toEqual([1,2,3,0,0]);
    });
});
