//first set up the modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const shields = require("shields");

const writeFile = util.promisify(fs.writeFile);

var badgeURL = `https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>`

//this is the inquirer prompt to collect the user's information
inquirer
    .prompt([
        {
            name: "projectTitle",
            type: "input",
            message: "Enter the title of the project:"
        },
        {
            name: "projectDescription",
            type: "input",
            message: "Give an overview of the project:"
        },
        {
            name: "installation",
            type: "input",
            message: "Enter installation instructions:"
            //could expand this into a loop that asks if you have another instruction and appends each instruction into a numbered list
        },
        {
            name: "usage",
            type: "input",
            message: "Steps to use the program:"
        },
        {
            name: "license",
            type: "input",
            message: "Enter license information:"
        },
        {
            name: "contributors",
            type: "input",
            message: "Contributor names:"
        },
        {
            name: "tests",
            type: "input",
            message: "Tests performed:"
        },
        {
            name: "questions",
            type: "input",
            message: "What kind of feedback do you need?"
        },
        {
            name: "userGithub",
            type: "input",
            message: "What's your github account handle?"
        },
    ])
    .then(function (userData) {
        console.log(userData);
        
        //the code below is for getting info from github but seems to be breaking everything
        //console.log(userData.userGithub);
        //return axios.get(`https://api.github.com/users/${userData.userGithub}`);
        
        //make template a separate file instead? - already copied over all this information
    const template = `
# *${userData.projectTitle}*
## By: ${userData.contributors}
        
Table of Contents:
[Overview](Overview)
[Installation](Installation)
[Usage](Usage)
[Licenses](Licenses)
[Tests](Tests)
[Questions](Questions)
        
        
## Overview: ${userData.projectDescription}
        
## Installation:  
${userData.installation}
        
## Usage:  
${userData.usage}
        
## Licenses:  
${userData.license}
        
## Tests:  
${userData.tests}
        
## Questions:  
${userData.questions}
        
`;
        
    writeToFile("output/readme", template);
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


//FUTURE STEPS:
//Badges
//Github API
// do the screenshots
// work from external template