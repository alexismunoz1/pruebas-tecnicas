const maxProfit = require('./best-time-to-buy-sell-stock.challenge');

describe('Best Time to Buy and Sell Stock', () => {
    test('caso básico', () => {
        expect(maxProfit([7,1,5,3,6,4])).toBe(5);
    });

    test('precios decrecientes', () => {
        expect(maxProfit([7,6,4,3,1])).toBe(0);
    });

    test('array de dos elementos', () => {
        expect(maxProfit([1,2])).toBe(1);
    });

    test('array de un elemento', () => {
        expect(maxProfit([1])).toBe(0);
    });

    test('precios iguales', () => {
        expect(maxProfit([2,2,2,2])).toBe(0);
    });
});
