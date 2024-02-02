const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai.js");

describe("calculateNumber(type, a, b)", function () {
	it("SUM the 2 rounded numbers", function () {
		expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
		expect(calculateNumber("SUM", 1.4, 4.5555)).to.equal(6);
		expect(calculateNumber("SUM", 1.04, 10.2)).to.equal(11);
	});
	it("SUBTRACT the 2 rounded numbers", function () {
		expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
		expect(calculateNumber("SUBTRACT", 1.4, 4.5555)).to.equal(-4);
		expect(calculateNumber("SUBTRACT", -1.04, 10.2)).to.equal(-11);
	});
	it("DIVIDE the 2 rounded numbers", function () {
		expect(calculateNumber("DIVIDE", 10.324, 2.09)).to.equal(5);
		expect(calculateNumber("DIVIDE", 9.524, 2.41)).to.equal(5);
		expect(calculateNumber("DIVIDE", 120.19845, 59.565)).to.equal(2);
		expect(calculateNumber("DIVIDE", 8.0, 2.0)).to.equal(4.0);
		expect(calculateNumber("DIVIDE", -7.0, 2.0)).to.equal(-3.5);
		expect(calculateNumber("DIVIDE", 7.0, -2.0)).to.equal(-3.5);
		expect(calculateNumber("DIVIDE", -2.0, -2.0)).to.equal(1);
	});
	it("DIVISION with 0", function () {
		expect(calculateNumber("DIVIDE", 100.654, 0.09)).to.equal("Error");
		expect(calculateNumber("DIVIDE", 9.524, 0)).to.equal("Error");
		expect(calculateNumber("DIVIDE", 0.2, 0.2)).to.equal("Error");
		expect(calculateNumber("DIVIDE", 5.0, -0.2)).to.equal("Error");
		expect(calculateNumber("DIVIDE", -5.0, 0.2)).to.equal("Error");
	});
	it("DIVISION of 0 and 0", () => {
		expect(calculateNumber("DIVIDE", 0.0, 0.0)).to.equal("Error");
	});
});
