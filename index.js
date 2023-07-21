const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square} = require('./lib/shapes');
const Svg = require("./lib/svg");


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
    generateLogo('logo.svg', answers);
});
