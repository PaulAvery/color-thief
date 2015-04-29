/* eslint-env browser */

export default function Canvas (w, h) {
	var canvas = document.createElement('canvas');

	if(w) canvas.width = w;
	if(h) canvas.height = h;

	return canvas;
}

Canvas.Image = window.Image;
