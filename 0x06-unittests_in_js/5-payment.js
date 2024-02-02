/**
 * This is a function, an API, that is calling the function defined in the Util module
 */
const Utils = require("./utils");

/**
 * Call calculateNumber function/method in the Util module
 * @param {number} totalAmount
 * @param {number} totalShipping
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
	const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);
	console.log(`The total is: ${result}`);
};

module.exports = sendPaymentRequestToApi;
