const findMedianSortedArrays = require('./median-of-two-sorted-arrays.challenge');

describe('Median of Two Sorted Arrays', () => {
    test('caso básico', () => {
        expect(findMedianSortedArrays([1,3], [2])).toBe(2);
    });

    test('arrays de igual longitud', () => {
        expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5);
    });

    test('un array vacío', () => {
        expect(findMedianSortedArrays([], [1])).toBe(1);
    });

    test('arrays con un elemento cada uno', () => {
        expect(findMedianSortedArrays([1], [2])).toBe(1.5);
    });

    test('arrays más largos', () => {
        expect(findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10])).toBe(5.5);
    });
});
