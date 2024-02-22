// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [{
    type : "input",
    message : "What is your project title?",
    name : "title"
},{
    type : "input",
    message : "Please provide the description for your project",
    name : "description"
},{
    type : "input",
    message : "Please provide the installation instructions",
    name : "installation"
},{
    type : "input",
    message : "What is the usage of your project?",
    name : "usage"
},{
    type : "list",
    message : "Choose a license for your application",
    name : "license",
    choices : ["MIT","Apache","IBM","No License"]
},{
    type : "input",
    message : "Please provide the contributing to your application",
    name : "contributing"
},{
    type : "input",
    message : "Please provide tests instructions for your application",
    name : "tests"
},{
    type : "input",
    message : "What is your email address?",
    name : "email"
},{
    type : "input",
    message : "What is your GitHub username?",
    name  : "username"
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)

    fs.writeFile(fileName, content, err => {
        if(err){
            console.error(err)
            return
        }else{
            console.log("Success! Your README.md file has been generated!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        writeToFile("./output/README.md", data)
    })
}

// Function call to initialize app
init();
