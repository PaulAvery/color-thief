/*
 * CanvasImage Class
 * Class that wraps the html image element and canvas.
 * It also simplifies some of the canvas context manipulation
 * with a set of helper functions.
 */

import fs from 'fs';
import {default as Canvas, Image} from 'canvas';

export default class CanvasImage {
	constructor(image) {
		this.canvas = new Canvas();
		this.context = this.canvas.getContext('2d');

		// We have to create our image object if no proper image is provided
		if(!(image instanceof Image)) {
			let img = new Image();

			if(typeof image === 'string') {
				img.src = fs.readFileSync(image);
			} else {
				img.src = image;
			}

			image = img;
		}

		this.width = this.canvas.width = image.width;
		this.height = this.canvas.height = image.height;

		this.context.drawImage(image, 0, 0, this.width, this.height);
	}

	clear() {
		this.context.clearRect(0, 0, this.width, this.height);
	}

	update(imageData) {
		this.context.putImageData(imageData, 0, 0);
	}

	getPixelCount() {
		return this.width * this.height;
	}

	getImageData() {
		return this.context.getImageData(0, 0, this.width, this.height);
	}

	removeCanvas() {
		if(this.canvas.parentNode) this.canvas.parentNode.removeChild(this.canvas);
	}
}
