const { expect, test } = require('../index');
const { sum, subtract } = require('../src/math');

test('calling sum should return correct summary', () => {
	const summary = sum(5, 12);
	const expected = 15;

	expect(summary).toBe(expected);
});

test('calling subtract should return correct difference', () => {
	const difference = subtract(10, 5);
	const expected = 5;

	expect(difference).toBe(expected);
});
