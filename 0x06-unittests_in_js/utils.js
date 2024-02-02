/**
 * This is the module that contains all the functions to be tested in an object way i.e property:value
 */
const Utils = {
	calculateNumber: (type, a, b) => {
		switch (type) {
			case "SUM":
				return Math.round(a) + Math.round(b);
			case "SUBTRACT":
				return Math.round(a) - Math.round(b);
			case "DIVIDE":
				return Math.round(b) === 0
					? "Error"
					: Math.round(a) / Math.round(b);
			default:
				return 0;
		}
	},
};

module.exports = Utils;
