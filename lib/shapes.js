class Shape {
  constructor(fill = "green") {
    this.fill = fill;
  }

  setColor(fill) {
    this.fill = fill;
  }
}

class Circle extends Shape {
  constructor(fill, radius) {
    super(fill);
    this.radius = radius;
    this.markUp = `<circle cx="150" cy="100" r="80" fill="${fill}" />`;
  }

  render() {
    return this.markUp;
  }
}

class Square extends Shape {
  constructor(fill) {
    super(fill);
    this.markUp = `<rect width="100%" height="100%" fill="${fill}/>`;
  }

  render() {
    return this.markUp;
  }
}

class Triangle extends Shape {
  constructor(fill) {
    super(fill);
    this.markUp = `<polygon points="225,60 60,400 400,400" fill="${fill}" />`;
  }
  render() {
    return this.markUp;
  }
}

// console.log(this.markUp);

module.exports = { Shape, Circle, Square, Triangle };
