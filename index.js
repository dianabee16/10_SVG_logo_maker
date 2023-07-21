const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
const Svg = require("./lib/svg");

function generateLogo(fileName, answers){
    fs.writeFile(fileName, answers, (err) => {
        err?console.log(err): console.log("Your logo has been generated")
    })
}

function init(){
    inquirer.prompt([
        {
            type: 'maxlength-input',
            name: 'text',
            message: 'Please enter your text (up to 3 characters):',
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Please enter the text color (or a hexadecimal number):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please enter the shape you would like:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the shape color (or a hexadecimal number):',
        }
    ])
    .then((answers) => {
        let myLogo; 
        switch(answers.shape){
            case "circle": 
            myLogo = new Circle()
            break;
            case "triangle":
            myLogo = new Triangle()
            break;
            case "square":
            myLogo = new Square()
            break;
        }
        myLogo.setColor(answers.shapeColor)
        const newLogo = new Svg()
        newLogo.setShape(myLogo)
        newLogo.setText(answers.text, answers.textColor)
        if(answers.text.lenght > 3){
            console.log("text must be less than 3 characters")
            init()
        }else{
            generateLogo('logo.svg', newLogo.render());
        }
    });
    
}
init()
