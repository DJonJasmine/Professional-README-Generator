// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// example url https://shields.io/badge/license-MIT-green

function renderLicenseBadge(license) {
  let badge = '';
  
  if(license === 'Apache') {
    badge = '![License Badge](https://img.shields.io/badge/License-Apache-informational)';
  } else if (license === 'BSD') {
    badge = '![License Badge](https://img.shields.io/badge/License-BSD-informational)';
  } else if (license === 'GPL') {
    badge = '![License Badge](https://img.shields.io/badge/License-GPL-informational)';
  } else if (license === 'MIT') {
    badge = '![License Badge](https://img.shields.io/badge/License-MIT-informational)';
  }
  
  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  // select correct license link for the selected license
  switch(license) {
    case 'MIT':
      licenseLink = 'https://mit-license.org/';
      break;
    case 'BSD':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'GPL':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.html';
      break;
    default:
      licenseLink = '';
      break;
  }
  
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = '';

  // if a license has been selected, create License section
  // with link to license information
  if (license != 'None') {
    licenseSect += '## License\n'
    licenseSect += 'Please view ' + renderLicenseLink(license) + ' for detailed information on this license\n\n';
  }

  return licenseSect;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ['Description', 'Installation', 'Usage', 'Contributing', 'Tests', 'License', 'Questions'];

  // add title
  let markdown = '# ' + data.name + '\n\n';

  // add license badge
  markdown += renderLicenseBadge(data.license) + '\n\n';

  // add table of contents
  markdown += '## Table of Contents\n\n';
  for (let i = 0; i < sections.length; i++) {
    if (! (sections[i] === 'License' && data.license === 'None')) {
      markdown += i + 1 + '. [' + sections[i] + '](#' + sections[i][0].toLowerCase() + sections[i].substring(1) + ')\n\n';
    }
  }
  markdown += '\n';

  // add description
  markdown += '## ' + sections[0] + '\n\n';
  markdown += data.description + '\n\n';

  // add installation
  markdown += '## ' + sections[1] + '\n\n';
  markdown += data.installation + '\n\n';

  // add usage
  markdown += '## ' + sections[2] + '\n\n';
  markdown += data.usage + '\n\n';

  // add contributing
  markdown += '## ' + sections[3] + '\n\n';
  markdown += data.contributions + '\n\n';

  // add testing
  markdown += '## ' + sections[4] + '\n\n';
  markdown += data.test + '\n\n';

  // add license
  markdown += renderLicenseSection(data.license) + '\n\n';

  // add questions
  markdown += '## ' + sections[6] + '\n\n';
  markdown += 'Link to Github profile link [HERE](https://github.com/' + data.username + ').\n\n';
  markdown += 'If should have any questions please contact me at ' + data.email + ' .\n\n'

  return markdown;
}

module.exports = generateMarkdown;