const inquirer = require("inquirer");
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/shapes.js");

inquirer
    .prompt([
        {
            type: 'Input',
            name: 'text',
            message: 'Please enter three characters for your logo e.g. THX, CJP...'
        },
        {
            type: 'Input',
            name: 'textColor',
            message: 'What color text do you want for your logo? - e.g. blue or #0000FF...',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape for your logo',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'Input',
            name: 'shapeColor',
            message: 'What color do you want your shape to be? - e.g. blue or #0000FF...',
        },
    ])


    .then((answers) => {
        console.log("Generated logo.svg")
        var svgString = ""
        if (answers.shape === "Circle") {
            const circle = new Circle(answers.text, answers.textColor, answers.shapeColor)
            svgString = circle.renderStart() + circle.insertShape() + circle.renderText() + circle.renderEnd()
        } else if
            (answers.shape === "Triangle") {
            const triangle = new Triangle(answers.text, answers.textColor, answers.shapeColor)
            svgString = triangle.renderStart() + triangle.insertShape() + triangle.renderText() + triangle.renderEnd()
        } else if
            (answers.shape === "Square") {
            const square = new Square(answers.text, answers.textColor, answers.shapeColor)
            svgString = square.renderStart() + square.insertShape() + square.renderText() + square.renderEnd()
        }



        fs.writeFileSync('logo.svg', svgString)
    });