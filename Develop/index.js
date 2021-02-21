// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
function promptUser() {
    
    return inquirer.prompt([
        {
            type: "input",
            name: "project_title",
            message: "What is your project titled?"
          },

          {
            type: "input",
            name: "description",
            message: "Briefly describe your project"
          },
          {
            type: "input",
            name: "install",
            message: "Are there any installations required?"
          },
          {
            type: "input",
            name: "use",
            message: "What is the use of the application?"
          },
          {
            type: "input",
            name: "contributions",
            message: "Are there any contribution rules?"
          },
          {
            type: "input",
            name: "test",
            message: "Please provide test instructions if applicable"
          },
          {
            type: "checkbox",
            message: "License?",
            name: "license",
            choices: [
              "[MIT License](LICENSE.txt)"
             
            ]
          },
          {
            type: "input",
            name: "email",
            message: "Enter your email account"
          },
          {
            type: "input",
            name: "github",
            message: "Enter your github username"
          }
        ]);
      }


      function generateREADME(answers) {
        return `# ${answers.project_title}
          
      #### Table of Contents
      1. [Project Description](#project-description)
      2. [Installation Instructions](#installation-instructions)
      3. [Usage Information](#usage-information)
      4. [Contributors](#contributors)
      5. [Test Instructions](#test-instructions)
      6. [License](#license)
      7. [Questions](#questions)
      ## Project Description
      * ${answers.description}
      ## Installation Instructions
      * ${answers.install}
      ## Usage Information
      * ${answers.use}
      ## Contributors
      * ${answers.contributions}
      ## Test Instructions
      * ${answers.test}
      ## License
      * licensed under the ${answers.license}
      ## Questions
      * For additional help or questions, please reach out to ${answers.email}
      * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
        
      }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
