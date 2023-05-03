// const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");
const fs = require("fs");
const SVG = require("./lib/svg");
const { writeFile } = require("fs");

const userResponses = await inquirer.prompt([
  {
    type: "list",
    name: "shape",
    message: "Which shape do you want?",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "fill",
    message:
      "What color do you want your shape to be? (you may also use a hexadecimal value)",
  },
  {
    type: "input",
    name: "text",
    message:
      "What text do you want inside of your shape? (Must be between 1-3 characters)",
    validate: (input) => {
      if (input.length > 3) {
        return "Text must be between 1 and 3 characters";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textFill",
    message:
      "What color do you want your text to be? (you may also use a hexadecimal value",
  },
]);

let shape;

switch (userResponses.shape) {
  case "circle":
    shape = new Circle();
    break;
  case "triangle":
    shape = new Triangle();
    break;
  case "square":
    shape = new Square();
    break;
}

fs.writeFile("shape.svg", shape.markUp, function (err) {
  if (err) console.log(err);
});
