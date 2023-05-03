const { Triangle, Circle, Square } = require("./shapes");

test("should return a blue triangle", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

test("should return a blue square", () => {
  const shape = new Square();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<rect width="100%" height="100%" fill="blue" />'
  );
});

test("should return a blue circle", () => {
  const shape = new Circle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="blue" />'
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

test('should first', () => { second })

test('should ', () => {
  
});