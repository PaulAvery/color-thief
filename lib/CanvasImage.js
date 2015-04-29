'use strict';

var _interopRequireDefault = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
	value: true
});
/*
 * CanvasImage Class
 * Class that wraps the html image element and canvas.
 * It also simplifies some of the canvas context manipulation
 * with a set of helper functions.
 */

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _Canvas$Image = require('canvas');

var _Canvas$Image2 = _interopRequireDefault(_Canvas$Image);

var CanvasImage = (function () {
	function CanvasImage(image) {
		_classCallCheck(this, CanvasImage);

		this.canvas = new _Canvas$Image2['default']();
		this.context = this.canvas.getContext('2d');

		// We have to create our image object if no proper image is provided
		if (!(image instanceof _Canvas$Image.Image)) {
			var img = new _Canvas$Image.Image();

			if (typeof image === 'string') {
				img.src = _fs2['default'].readFileSync(image);
			} else {
				img.src = image;
			}

			image = img;
		}

		this.width = this.canvas.width = image.width;
		this.height = this.canvas.height = image.height;

		this.context.drawImage(image, 0, 0, this.width, this.height);
	}

	_createClass(CanvasImage, [{
		key: 'clear',
		value: function clear() {
			this.context.clearRect(0, 0, this.width, this.height);
		}
	}, {
		key: 'update',
		value: function update(imageData) {
			this.context.putImageData(imageData, 0, 0);
		}
	}, {
		key: 'getPixelCount',
		value: function getPixelCount() {
			return this.width * this.height;
		}
	}, {
		key: 'getImageData',
		value: function getImageData() {
			return this.context.getImageData(0, 0, this.width, this.height);
		}
	}, {
		key: 'removeCanvas',
		value: function removeCanvas() {
			if (this.canvas.parentNode) this.canvas.parentNode.removeChild(this.canvas);
		}
	}]);

	return CanvasImage;
})();

exports['default'] = CanvasImage;
module.exports = exports['default'];
