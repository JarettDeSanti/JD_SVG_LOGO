
// created parent class constructor named "Shapes", to use for circle, square, and triangle
class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    renderStart(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
    }
    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    renderEnd(){
        return `</svg>`
    }
}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    } 
    insertShape() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
} 

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    insertShape() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`
    }
} 

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    insertShape() {
        return `<rect width="100%" height="100%" fill="${this.shapeColor}" />`
    }
} 

// exports the circle, triangle, and square
module.exports = {Circle, Triangle, Square}