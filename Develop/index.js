// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();




// packages required for application
const inquirer = require("inquirer");

const fs = require("fs");

const path = require("path");

const generateMarkdown = require("./assets/utils/generateMarkdown");

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
        type: "input",
        name: "license",
        message: "What license does your project have?"
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
        .then((inquirerAnswers) => {
            console.log("Generating.... Please wait....");
            writeToFile("./assets/utils/sampleREADME.md", generateMarkdown({ ...inquirerAnswers }));
        })
}

// function call to initialize app
init();