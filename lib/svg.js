let shapes = require("./shapes");

class SVG {
  constructor(text, textFill, shape, shapeFill) {
    this.text = text;
    this.textFill = textFill;
    this.shape = shape;
    this.shapeFill = shapeFill;
    this.markUp = `${Circle.render()}`;
  }
}

module.exports = SVG;
