const inquirer = require('inquirer');
const generateHTML = require('./generateHTML'); // this is a separate module that generates the HTML file based on the user input

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

// This is the main function that drives the application
async function runApp() {
  const team = [];
  let manager;

  // Prompt the user for the manager's information
  manager = await promptManager();
  team.push(manager);

  // Prompt the user for team members until they choose to finish
  while (true) {
    const { choice } = await promptTeamMember();

    if (choice === 'Engineer') {
      const engineer = await promptEngineer();
      team.push(engineer);
    } else if (choice === 'Intern') {
      const intern = await promptIntern();
      team.push(intern);
    } else {
      // The user has chosen to finish building the team
      break;
    }
  }

  // Generate the HTML file based on the team information
  generateHTML(team);
}

// Call the main function to start the application
runApp();
