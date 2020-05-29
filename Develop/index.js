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
            message: "What is the thing called?"
        },
        {
            name: "projectDescription",
            type: "input",
            message: "Describe the thing:"
        },
        {
            name: "tableOfContents",
            type: "input",
            message: "List your table of contents"
        },
        {
            name: "installation",
            type: "input",
            message: "How do you install the thing?"
        },
        {
            name: "usage",
            type: "input",
            message: "How do you use the thing?"
        },
        {
            name: "license",
            type: "input",
            message: "What license is the thing under?"
        },
        {
            name: "contributors",
            type: "input",
            message: "Who made the thing?"
        },
        {
            name: "tests",
            type: "input",
            message: "How do you test the thing?"
        },
        {
            name: "questions",
            type: "input",
            message: "What kind of feedback do you need about the thing?"
        },
        {
            name: "userGithub",
            type: "input",
            message: "What's your github account handle?"
        }
    ])
    .then(function (userData) {
        console.log(userData);
        //localStorage.setItem("userData", JSON.stringify(userData));

        const template = `
        # *${userData.projectTitle}*
        ## By: ${userData.contributors}
        `;

        writeToFile(userData.projectTitle, template);
    })

    //this breaks the code. why?
//console.log(localStorage.getItem("userData"));

    //we're defining a function here so we don't need to worry about how these variables are named, we'll call in our locally stored userData variable later
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, function (err) {
        if (err) throw err;
        console.log('saved!');
    });
}

function init() {

}

init();
