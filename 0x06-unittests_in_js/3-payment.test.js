/**
 * sinon - For spying the function. Behave exactly like the function but have access to data aboyt all calls
 * Utils - The module to test
 * expect - Assertion method in chai assertion library, making the test more readable
 * sendPaymentRequestToApi - The API using the Util module
 */
const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon");
const Utils = require("./utils");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function () {
	it("Test the sendPaymentRequestToApi endpoint", function () {
		const utilSpy = sinon.spy(Utils, "calculateNumber");
		sendPaymentRequestToApi(100, 20);
		expect(utilSpy.calledWith("SUM", 100, 20)).to.be.true;
	});
});
