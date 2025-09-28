const climbStairs = require('./climbing-stairs.challenge');

describe('Climbing Stairs', () => {
    test('2 pasos', () => {
        expect(climbStairs(2)).toBe(2);
    });

    test('3 pasos', () => {
        expect(climbStairs(3)).toBe(3);
    });

    test('1 paso', () => {
        expect(climbStairs(1)).toBe(1);
    });

    test('4 pasos', () => {
        expect(climbStairs(4)).toBe(5);
    });

    test('5 pasos', () => {
        expect(climbStairs(5)).toBe(8);
    });
});
