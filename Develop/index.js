const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFile = util.promisify(fs.writeFile);

// copied from class example
// const questions = [
// ];

inquirer
    .prompt([
        {
            name: "projectTitle",
            type: "input",
            message: "What is the title of your project?"
        },
        {
            name: "projectDescription",
            type: "input",
            message: "Describe your project."
        },
        {
            name: "tableOfContents",
            type: "input",
            message:
        }
    ])

function writeToFile(fileName, data) {
}

function init() {

}

init();
