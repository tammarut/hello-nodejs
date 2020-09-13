class Shape {
   calculateArea() {
      // nothing
   }
}


class Rectangle extends Shape{
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  setWidth(width) {
    this.width = width
  }

  setHeight(height) {
    this.height = height
  }

  calculateArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width
    this.height = width
  }

  setHeight(height) {
    this.width = height
    this.height = height
  }

  calculateArea() {
    return this.width * this.height
  }
}

const increaseShapeWidth = rectangle => {
  rectangle.setWidth(rectangle.width + 1)
}
const rectangle1 = new Rectangle(2, 4)
const square = new Square(5, 5)

increaseShapeWidth(rectangle1)
increaseShapeWidth(square)

console.log(rectangle1.calculateArea())
console.log(square.calculateArea())
