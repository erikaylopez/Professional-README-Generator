
// packages required for application
const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

//links questions to README file
const generateMarkdown = require('./utils/generateMarkdown.js');
const { default: Choices } = require("inquirer/lib/objects/choices.js");

//  array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project:"
    },
    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the proper usage of this repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this repo?"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: [
            "MIT",
            "APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?"
    },
    {
        type: "input",
        name: "questions",
        message: "What should users do if they have questions?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    },

];


// function to write read me file

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(() => {
            console.log("data");
            fs.writeFile('GeneratedREADME/GeneratedREADME.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})
        }

// function call to initialize app
init();