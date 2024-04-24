// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license) if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ""
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license !== "None") {
    return (
      `* [License](#license)`
    );
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      
      Copyright @ ${license}. All rights reserved.
      
      Licensed under the ${license} license.`
    );
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
${renderLicenseSection(data.license)}

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
