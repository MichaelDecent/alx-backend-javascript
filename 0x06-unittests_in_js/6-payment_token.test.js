const expect = require("chai").expect;
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
	it("Should successfully call endpoint", function (done) {
		getPaymentTokenFromAPI(true).then((response) => {
			expect(response.data).to.be.equal(
				"Successful response from the API"
			);
			done();
		});
	});
});
