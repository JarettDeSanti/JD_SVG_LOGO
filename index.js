// created variables for requiring/importing "inquirer", "fs", and "circle, triangle, square" from shapes.js

const inquirer = require("inquirer");
const fs = require('fs');
const { Circle, Triangle, Square } = require("./lib/shapes.js");


// created the prompt to display in terminal for the 4 questions needed to meet requirements for project
// this is an array with questions 
inquirer
    .prompt([
        {
            type: 'Input',
            name: 'text',
            message: 'Please enter three characters for your logo e.g. SVG, THX, CJP...'
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

// displays "Generated logo.svg" in the console and creates new Circle, Triangle, or Square using the input from questions
// then creates the new logo.svg file
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