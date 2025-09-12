const trap = require('./trapping-rain-water');

describe('Trapping Rain Water', () => {
    test('caso básico', () => {
        expect(trap([0,1,0,2,1,0,1,3,2,1,2,1])).toBe(6);
    });

    test('caso simple', () => {
        expect(trap([4,2,0,3,2,5])).toBe(9);
    });

    test('sin agua atrapada', () => {
        expect(trap([1,2,3,4,5])).toBe(0);
    });

    test('array pequeño', () => {
        expect(trap([1,2,1])).toBe(0);
    });

    test('array muy pequeño', () => {
        expect(trap([1,2])).toBe(0);
    });
});
