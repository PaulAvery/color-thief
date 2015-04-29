# Color Thief
[![Build Status](https://img.shields.io/travis/PaulAvery/node-color-thief.svg?style=flat)](https://travis-ci.org/PaulAvery/node-color-thief)

A script for grabbing the color palette from an image. This is a fork of the original [color-thief](https://github.com/lokesh/color-thief/) library, modified to work in node as well as in the browser.

Further changes have been made to code structure as well as tests and general organisation.

A demo may be found on the original projects site: [lokeshdhakar.com](http://lokeshdhakar.com/projects/color-thief)

## How to use
In node simply require:

```js
var ColorThief = require('@paulavery/color-thief')
```

In a browser simply reference the main file, which will provide `window.ColorThief`.

```html
<!-- installed via bower -->
<script src="bower_components/color-thief/lib/browser.min.js"></script>

<!-- installed via npm -->
<script src="node_modules/color-thief/lib/browser.min.js"></script>
```

### Get the dominant color from an image
```js
var colorThief = new ColorThief();
colorThief.getColor(sourceImage);
```

```js
getColor(sourceImage[, quality])
returns {r: num, g: num, b: num}
```

### Build a color palette from an image

In this example, we build an 8 color palette.

```js
var colorThief = new ColorThief();
colorThief.getPalette(sourceImage, 8);
```

```js
getPalette(sourceImage[, colorCount, quality])
returns [ [num, num, num], [num, num, num], ... ]
```

## Tests
To run the tests, simply call `make test`.
Tests may be found in the `test` directory and utilize [mocha](http://mochajs.org/) as well as [phantomjs](http://phantomjs.org/) for testing in the browser as well as node.

## Credits and license

### Author
by Lokesh Dhakar  
[lokeshdhakar.com](http://www.lokeshdhakar.com)
[twitter.com/lokesh](http://twitter.com/lokesh)

### Fork Maintainer
Florian Albertz
[Github](http://github.com/PaulAvery)

### Thanks
* Nick Rabinowitz - For creating quantize.js.
* John Schulz - For clean up and optimization. @JFSIII
* Nathan Spady - For adding drag and drop support to the demo page.

### License
Licensed under the [Creative Commons Attribution 2.5 License](http://creativecommons.org/licenses/by/2.5/)

* Free for use in both personal and commercial projects.
* Attribution requires leaving author name, author homepage link, and the license info intact.
