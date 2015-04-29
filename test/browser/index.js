/* eslint-env mocha,browser */
/* eslint-disable no-unused-expressions */
/* global Should */

describe('In the browser', function() {
	it('Populates a global "ColorThief" variable', function() {
		Should.exist(window.ColorThief);
	});
});
