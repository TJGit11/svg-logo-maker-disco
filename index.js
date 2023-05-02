const fs = require("fs");
let SVG = require("./lib/svg");

let newShape = new SVG("AND", "green", "triangle", "yellow");

fs.writeFile("shape.svg", newShape.markUp, function (err) {
  if (err) console.log(err);
});
