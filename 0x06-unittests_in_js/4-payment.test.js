/**
 * sinon - For spying and stubbing the function. Behave exactly like the function but have access to data aboyt all calls
 * Utils - The module to test
 * expect - Assertion method in chai assertion library, making the test more readable
 * sendPaymentRequestToApi - The API using the Util module
 */
const sendPaymentRequestToApi = require("./4-payment");
const sinon = require("sinon");
const Utils = require("./utils");
const expect = require("chai").expect;

describe("sendPaymentRequestToApi", function () {
	it("Test the sendPaymentRequestToApi endpoint but fix it's return value using stub", function () {
		const spiedConsole = sinon.spy(console);
		const stubFxn = sinon.stub(Utils, "calculateNumber");
		stubFxn.returns(10);
		sendPaymentRequestToApi(100, 20);
		expect(stubFxn.calledWith("SUM", 100, 20)).to.be.true;
		expect(stubFxn((100, 20))).to.be.equal(10);
		expect(spiedConsole.log.calledWith("The total is: 10")).to.be.true;
		stubFxn.restore(); //Restore so it does not affect other test
		spiedConsole.log.restore(); //Restore so it does not affect other test
	});
});
