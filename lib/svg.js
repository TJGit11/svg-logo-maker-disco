let shapes = require("./shapes");

class SVG {
  constructor(text, textFill, shape, shapeFill) {
    this.text = text;
    this.textFill = textFill;
    this.shape = shape;
    this.shapeFill = shapeFill;
    this.markUp = `${shapes.Triangle}`;
  }
}

module.exports = SVG;
