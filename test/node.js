/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

var fs = require('fs');
var should = require('should');

describe('In a node runtime', function() {
	it('Exports itself as a module', function() {
		var ColorThief = require('../');

		should.exist(ColorThief);
	});

	it('Takes a string instead of an image object', function() {
		var ColorThief = require('../');

		var thief = new ColorThief();
		var color = thief.getColor('test/test.png');

		color.should.be.Array;
		color.length.should.be.equal(3);

		color.should.be.eql([12, 14, 34]);
	});

	it('Takes a buffer instead of an image object', function() {
		var ColorThief = require('../');

		var thief = new ColorThief();
		var color = thief.getColor(fs.readFileSync('test/test.png'));

		color.should.be.Array;
		color.length.should.be.equal(3);

		color.should.be.eql([12, 14, 34]);
	});
});
