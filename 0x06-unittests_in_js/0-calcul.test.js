const assert = require("assert");
const calculateNumber = require("./0-calcul.js");

describe("calculateNumber(a, b)", function () {
	it("No floating number", function () {
		assert.strictEqual(calculateNumber(1, 3), 4);
		assert.strictEqual(calculateNumber(1.0, 2.0), 3);
	});
	it("should be rounded up", function () {
		assert.strictEqual(calculateNumber(1, 3.7), 5);
		assert.strictEqual(calculateNumber(2.5, 3.9), 7);
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});
	it("should be rounded down", function () {
		assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
	});
});
