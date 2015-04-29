/* eslint-env mocha,browser */
/* eslint-disable no-unused-expressions */

var node = typeof window === 'undefined';

var ColorThief = node ? require('../') : window.ColorThief;
var Should = node ? require('should') : window.Should;
var Image = node ? require('canvas').Image : window.Image;
var image = new Image();

before(function(done) {
	if(node) {
		image.src = require('fs').readFileSync('test/test.png');
		done();
	} else {
		image.src = '../test.png';

		image.onload = function() {
			done();
		};
	}
});

describe('The ColorThief constructor', function() {
	it('is instantiable', function() {
		var thief = new ColorThief();
		Should.exist(thief);
	});

	describe('provides a getColor() method, which', function() {
		var thief = new ColorThief();

		it('exists', function() {
			thief.should.have.property('getColor');
			thief.getColor.should.be.Function;
		});

		it('returns an array of rgb values', function() {
			var color = thief.getColor(image);

			color.should.be.Array;
			color.length.should.be.equal(3);

			color.should.be.eql([12, 14, 34]);
		});
	});

	describe('provides a getPalette() method, which', function() {
		var thief = new ColorThief();

		it('exists', function() {
			thief.should.have.property('getPalette');
			thief.getPalette.should.be.Function;
		});

		it('returns an array of colors', function() {
			var colors = thief.getPalette(image);

			colors.should.be.Array;
			colors.map(function(color) {
				color.should.be.Array;
				color.length.should.be.equal(3);
			});
		});
	});
});
