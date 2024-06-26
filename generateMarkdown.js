// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
 
    if (license !== "None") {
      return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`;
      
    }

  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents
  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

## Installation
${data.dependencies}

## Usage 
${data.usage}

## Contributing 
${data.contributing}

## Tests 
${data.tests}


## Questions 
Github: ${data.github}
Email: ${data.email}
Phone: ${data.phone}
`;
}

module.exports = generateMarkdown;
