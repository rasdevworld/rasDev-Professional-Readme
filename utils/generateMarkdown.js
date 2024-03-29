// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
   if(license === "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
   }else if(license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
   }else if(license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
   }else{
    return ``
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  }else if(license === "Apache") {
  return `https://opensource.org/licenses/Apache-2.0`
  }else if(license === "IBM") {
    return `https://opensource.org/licenses/IPL-1.0`
  }else{
   return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No license'){
    return ``
  }else{
    return `This application has <a href="${renderLicenseLink(license)}">${license} License</a>`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}
      
  
  ## Contributing
  
  ${data.contributing}
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  For further questions, please feel free to contact me via information below:
  <ul>
    <li><a href='mailto:${data.email}?subject=contact me&body='>Contact Me</a></li>
    <li><a href='https://github.com/${data.username}'>My Github Profile</a></li>
  </ul>
  
`;
}

module.exports = generateMarkdown;
