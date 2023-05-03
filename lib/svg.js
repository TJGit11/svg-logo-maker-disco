const { Circle, Square, Triangle } = require("./shapes");

class SVG {
  constructor(text, textFill, shape, shapeFill) {
    this.text = text;
    this.textFill = textFill;
    this.shape = shape;
    this.shapeFill = shapeFill;
    this.markUp = render(`<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
 
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  </svg>`);
  }
}

module.exports = SVG;
