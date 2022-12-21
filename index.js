const fs = require('fs')
const inquirer = require('inquirer')// import prompts from './lib/prompts.js'
const prompts = require('./lib/prompts')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//Creates and returns a Manager object using inquirer
const createManager = async () => {
    const data = await inquirer.prompt(prompts.manager)
    const manager = new Manager(data.name, data.id, data.email, data.office)
    return manager
    // inquirer.prompt(prompts.manager)
    //     .then(data => {
    //         const manager = new Manager(data.name, data.id, data.email, data.office)
    //     })
}

//Creates and returns a Engineer object using inquirer
const createEngineer = async () => {
    const data = await inquirer.prompt(prompts.engineer)
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
    return engineer
    // inquirer.prompt(prompts.engineer).then(data => {
    //     const engineer = new Engineer(data.name, data.id, data.email, data.github);
    // })
}

//Creates and returns a Intern object using inquirer
const createIntern = async () => {
    const data = await inquirer.prompt(prompts.intern)
    const intern = new Intern(data.name, data.id, data.email, data.school)
    return intern
    // inquirer.prompt(prompts.intern).then(data => {
    //     const intern = new Intern(data.name, data.id, data.email, data.school);
    // })
}

//Generates and returns HTML representing team members cards
const buildTeam = (teamMembers) => {
    var cardHTML = ``
    teamMembers.forEach(member => {
        switch (member.getRole()) {
            case 'Manager':
                cardHTML += managerCard(member);
                break;
            case 'Engineer':
                cardHTML += engineerCard(member);
                break;
            case 'Intern':
                cardHTML += internCard(member);
                break;
        }
    })
    return cardHTML
}

//Generates and returns a string representing a complete HTML document
const generateHTML = (cardData) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
        <link href="./style.css" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header>
            <h1 class="display-4 text-center p-2 bg-danger text-white">My Team</h1>
        </header>
    
        <section>
            <div class="row row-cols-1 row-cols-md-2 g-4 justify-content-center m-2">
                ${cardData}
                    
                </div>
            
        </section>
        <footer>
            <!--add footer??-->
        </footer>
    </body>
    
    </html>
        `
};

//Generates and returns a string representing a card component for a Manager 
const managerCard = (manager) => {
    return `<div class="col" style="max-width: 19rem">
    <div class="card-header bg-primary text-white text-capitalize">
        <p class="h5">${manager.getName()}</p>
        <p class="bi bi-cup-hot-fill"> Manager</p> 
    </div>
    <div class="card-body border bg-secondary bg-gradient" style="height:10rem">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:ducki@gmail.com"
                    target="_blank">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOffice()}</li>
        </ul>
    </div>
</div>`
}

//Generates and returns a string representing a card component for a Engineer
const engineerCard = (engineer) => {
    return `<div class="col" style="max-width: 19rem;">
    <div class="card-header bg-primary text-white text-capitalize">
        <p class="h5">${engineer.getName()}</p>
        <p class="bi bi-tools"> Engineer</p> 
    </div>
    <div class="card-body border bg-secondary bg-gradient" style="height:10rem">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:ducki@gmail.com"
                    target="_blank">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github Username: <a href="http://www.github.com/ducki"
                    target="_blank">${engineer.getGH()}</a></li>
        </ul>
    </div>
</div>`
}

//Generates and returns a string representing a card component for a Intern
const internCard = (intern) => {
    return `<div class="col" style="max-width: 19rem;">
    <div class="card-header bg-primary text-white text-capitalize">
        <p class="h5">${intern.getName()}</p>
        <p class="bi bi-person-fill"> Intern</p> 
    </div>
    <div class="card-body border bg-secondary bg-gradient" style="height:10rem">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:ducki@gmail.com"
                    target="_blank">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>`
}

// ENTRY POINT
async function init() {
    const teamMembers = []
    //Prompt and creates a Manager object
    const manager = await createManager()
    teamMembers.push(manager)
    //Loop until user responds with 'Finished'
    do {
        var results = await inquirer.prompt(prompts.menu)
        switch (results.choice) {
            case 'Engineer': 
                //Prompt and creates an Engineer object
                const engineer = await createEngineer();
                teamMembers.push(engineer);
                break;
            case 'Intern':
                //Prompt and creates an Intern object
                const intern = await createIntern();
                teamMembers.push(intern);
                break;
            case 'Finished':
                break;
        }
    } while (results.choice !== 'Finished')
    //Generates HTML 
    const cards = buildTeam(teamMembers)
    const html = generateHTML(cards)
    //Creates HTML file 
    fs.writeFile('dist/team.profile.html', html, (err) =>
        err ? console.log(err) : console.log('Your file has been created! Check dist/team.profile.html')
    );
}

init()