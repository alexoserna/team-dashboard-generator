const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/intern');


function generateHTML(team) {

    let teamMembers = ``;
    let snippet = ``;
    for (let i = 0; i < team.length; i++) {
        const person = team[i];

        switch (person.getRole()) {
            case 'Manager':
                snippet = `
                <div class="card">
                <div class="card-header">
                    <h2>${person.getName()}</h2>
                    <h3><i class="fa-solid fa-people-roof"></i> ${person.getRole()}</h3>
                </div>
                <div class="info">
                    <table>
                        <tr>
                            <td>ID: ${person.getId()}</td>
                        </tr>
                        <tr>
                            <td>Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></td>
                        </tr>
                        <tr>
                            <td>Office number: ${person.getOfficeNumber()}</td>
                        </tr>
                    </table>
                </div>
                </div>
                `;

                teamMembers += snippet;
                break;
            case 'Engineer':
                snippet = `
                <div class="card">
                <div class="card-header">
                    <h2>${person.getName()}</h2>
                    <h3><i class="fa-solid fa-glasses"></i> ${person.getRole()}</h3>
                </div>
                <div class="info">
                    <table>
                        <tr>
                            <td>ID:${person.getId()}</td>
                        </tr>
                        <tr>
                            <td>Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></td>
                        </tr>
                        <tr>
                            <td><a href="https://github.com/${person.getGithub()}">${person.getGithub()}</a></td>
                        </tr>
                    </table>
                </div>
            </div>
                `
                teamMembers += snippet;
                break;
            case 'Intern':
                snippet = `
                <div class="card">
                <div class="card-header">
                    <h2>${person.getName()}</h2>
                    <h3><i class="fa-solid fa-graduation-cap"></i> ${person.getRole()}</h3>
                </div>
                <div class="info">
                    <table>
                        <tr>
                            <td>ID:${person.getId()}</td>
                        </tr>
                        <tr>
                            <td>Email: <a href="mailto:${person.getEmail()}">${person.getEmail()}</a></td>
                        </tr>
                        <tr>
                            <td>School: ${person.getSchool()}</td>
                        </tr>
                    </table>
                </div>
            </div>
                `
                teamMembers += snippet;
                break;
            default:
                break;
        }
    };

    let html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <title>Team</title>
        <script src="https://kit.fontawesome.com/d838430afb.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <header>
            <h1>${team[0].name}'s Team</h1>
        </header>
    
        <section>
            <div class="container">
                   ${teamMembers}
            </div>
        </section>
    
    </body>
    
    </html>`;

    return html;
}

module.exports = generateHTML;