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
//function renderLicenseLink(license) {

  function renderLicenseLink(license) {
    if (license !== "None") {
      return (
        `* [License](#license-&copy)`
      )
    }
    return ""
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
   `## License &copy;

    Copyright @ ${license}. All rights reserved.

    Licensed under the ${license} license.`
    )
  }
  return ""
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

`;
}

# Professional-README-Generator

# Description 📝
${data.description}

# Table of Contents 📚
[Installation](#installation-📎)
[Usage](#usage-💻)
[Contributing](#contributing-✍)
[Tests](#tests-🧪)
[questions](#questions-❓)
${renderLicenseLink(data.license)}

# Installation 📎
${data.dependencies}

#Usage 💻
${data.usage}

${renderLicenseSection(data.license)}

#contributing ✍
${data.contributing}

#Tests 🧪
${data.tests}

#Questions ❓
Github: erikaylopez
Email: eylopez8686@gmail.com
Phone Number: 915-929-2209


module.exports = generateMarkdown;
