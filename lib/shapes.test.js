const { Triangle, Circle, Square } = require("./shapes");

test("should return a blue triangle", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

test("should", () => {
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

test("should", () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

// test("should set color to blue if we set color to blue", () => {
//   const shape = new Triangle();
//   shape.setColro("blue");
//   expect(shape.render()).toEqual(
//     '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
//   );
// });

// test("if no value is chosen, use green as default", () => {
//   const shape = new Triangle();
//   shape.setColro("blue");
//   expect(shape.render()).toEqual(
//     '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
//   );
// });
