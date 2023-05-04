const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateHTML = require('./utils/generateHTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/intern');

// This function prompts the user for the manager's information
function promptManager() {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is the team manager's name?",
      name: 'name',
    },
    {
      type: 'input',
      message: "What is the team manager's employee ID?",
      name: 'id',
    },
    {
      type: 'input',
      message: "What is the team manager's email address?",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is the team manager's office number?",
      name: 'officeNumber',
    },
  ]);
}

// This function prompts the user for an engineer's information
function promptEngineer() {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is the engineer's name?",
      name: 'name',
    },
    {
      type: 'input',
      message: "What is the engineer's employee ID?",
      name: 'id',
    },
    {
      type: 'input',
      message: "What is the engineer's email address?",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is the engineer's GitHub username?",
      name: 'github',
    },
  ]);
}

// This function prompts the user for an intern's information
function promptIntern() {
  return inquirer.prompt([
    {
      type: 'input',
      message: "What is the intern's name?",
      name: 'name',
    },
    {
      type: 'input',
      message: "What is the intern's employee ID?",
      name: 'id',
    },
    {
      type: 'input',
      message: "What is the intern's email address?",
      name: 'email',
    },
    {
      type: 'input',
      message: "What is the intern's school?",
      name: 'school',
    },
  ]);
}

// This function prompts the user to choose what type of team member to add next
function promptTeamMember() {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'Which type of team member would you like to add next?',
      choices: ['Engineer', 'Intern', 'Finish building my team'],
      name: 'choice',
    },
  ]);
}

function saveHTMLFile(directory, filename, htmlContent) {
  const filePath = path.join(__dirname, directory, filename);
  fs.writeFile(filePath, htmlContent, function (err) {
    if (err) throw err;
    console.log(`File "${filePath}" has been saved.`);
  });
}

// This is the main function that drives the application
async function runApp() {
  const team = [];

  // Prompt the user for the manager's information
  let manager = await promptManager();
  let newManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
  team.push(newManager);

  // Prompt the user for team members until they choose to finish
  while (true) {
    const { choice } = await promptTeamMember();

    if (choice === 'Engineer') {
      let engineer = await promptEngineer();
      let newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
      team.push(newEngineer);
    } else if (choice === 'Intern') {
      let intern = await promptIntern();
      let newIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
      team.push(newIntern);
    } else {
      // The user has chosen to finish building the team
      break;
    }
  }
  
  // Generate the HTML file based on the team information
  const htmlContent = generateHTML(team); // call your generateHTML() function to get the HTML content
  saveHTMLFile('dist', `${newManager.getName()}.html`, htmlContent); // call the saveHTMLFile() function to save the HTML file

}

// Call the main function to start the application
runApp();
