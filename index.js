// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'name',
        type: 'input',
        message: 'Enter the name of the project.',
    },
    {
        name: 'description',
        type: 'input',
        message: 'Enter a description of the project.',
    },
    {
        name: 'Table of Contents',
        type: 'input',
        message: 'List the projects Table of Contents.',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Enter the installation(s) that are needed for this project',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Enter information on how to use this project.',
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'Enter the requirements for contribution of this project.',
    },
    {
        name: 'test',
        type: 'input',
        message: 'Enter the projects test instructions.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please choose a license.',
        choices: ['Apache', 'BSD', 'GPL', 'MIT', 'None'],
        default: 'MIT License'
    },
    {
        name: 'username',
        type: 'input',
        message: 'Enter your Github username:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Enter your email address:',
        
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = './userREADME.md';

    fs.writeFile(fileName, data, function (err) {
        err ? console.log(err) : console.log(fileName + " has been created!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
