// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter the title for your project',
    name: 'title',
  },
  {
    type: 'input',
    message: 'enter a description of your project',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Enter any installation instructions you might have: ',
    name: 'installation'
  },
  {
    type: 'input',
    message: 'Enter any usage information you might have: ',
    name: 'usage'
  },
  {
    type: 'input',
    message: 'Enter any contribution guidelines you might have: ',
    name: 'contribution'
  },
  {
    type: 'input',
    message: 'Enter any test instructions you might have: ',
    name: 'test'
  },
  {
    type: 'list',
    message: 'Enter the license type',
    choices: ['Apache License v2.0', 'GNU General Public License v3.0', 'MIT License', 'no license information'],
    name: 'license'
  },
  {
    type: 'input',
    message: 'Enter your email so people can contact you with questions: ',
    name: 'email'
  },
  {
    type: 'input',
    message: 'Enter your username so you can link your GitHub profile: ',
    name: 'username'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


//FAKE CODE TO MAKE SURE THINGS WORK
//import packages here


inquirer
  .prompt(questions)
  .then(function (answers) {

    let licensetext = `This project is licensed under the ${answers.license}`
    let license;
    if (answers.license === "Apache License v2.0") {
      license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (answers.license === "GNU General Public License v3.0") {
      license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (answers.license === "MIT License") {
      license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (answers.license === "no license information") {
      license = ""
      licensetext = 'This project does not have a license.'
    }

    //this is alper is doing, where we output to a json with information containing all the user's input in key value pairs
    const filename = `./outputs/README.md`
    // const content = JSON.stringify(answers, null, 2) 
    const content = `
# ${answers.title}

${license}

# Description
${answers.description} 

##### Table of Contents 
[Installation](#installation)  
[Usage](#usage)  
[License](#license)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)

<a name="installation"></a>
# Installation 
${answers.installation}

<a name="usage"></a>
# Usage 
${answers.usage}

<a name="license"></a>
# License
${licensetext}

<a name="contributing"></a>
# Contributing 
${answers.contribution}

<a name="tests"></a>
# Tests
${answers.test}

<a name="questions"></a>
# Questions? 
Visit my [GitHub](https://www.github.com/${answers.username})  
[Email me](${answers.email}) with any questions you might have 


    `

    fs.writeFile(filename, content, (err) => 
      err ? console.error(err) : console.log('success')
    )

    console.log(`your stuff has been logged `)
  }
  );

  // for TABLE OF CONTENETS BELOW.
//   ##### Table of Contents  
// [Headers](#headers)  
// [Emphasis](#emphasis)  
// ...snip...    
// <a name="headers"/>
// ## Headers
// here's some file content here
// <a name="emphasis"/>
// ## Emphasis