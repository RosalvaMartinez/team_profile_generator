const fs = require('fs')
const inquirer = require('inquirer')// import prompts from './lib/prompts.js'
const prompts = require('./lib/prompts')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

//Empty array for data input to create cards
const teamObjects = []
//////////////////////////////////
const managerQ = () => {
    inquirer.prompt(prompts.manager)
        .then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.office)
            teamObjects.push(manager)
            menu()
        })
}

//select from menu options for next team member
const menu = () => {
    inquirer.prompt(prompts.menu)
        .then(selected => {
            switch (selected.menu) {
                case 'Engineer':
                    engineerQ();
                    break;
                case 'Intern':
                    internQ();
                    break;
                case 'Finished':
                    buildTeam();
                    break;
            }
        })
}

//engineer function
const engineerQ = () => {
    inquirer.prompt(prompts.engineer).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamObjects.push(engineer);
        menu();
    })
}

//questions for intern role
const internQ = () => {
    inquirer.prompt(prompts.intern).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamObjects.push(intern);
        menu();
    })
}

const buildTeam = () => {
    console.log(teamObjects)
}

const generateHTML = (teamInfo) => {
    //insert some html between ``
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
                ${cardinfo}
                    
                </div>
            
        </section>
        <footer>
            <!--add footer??-->
        </footer>
    </body>
    
    </html>
        `
};

//(data.name, data.id, data.email, data.office)
const managerCard = (teamInfo) => {
    return `<div class="col" style="max-width: 19rem">
    <div class="card-header bg-primary text-white text-capitalize">
        <p class="h5">${data.name}</p>
        <p></p> Manager
    </div>
    <div class="card-body border bg-secondary bg-gradient" style="height:10rem">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:ducki@gmail.com"
                    target="_blank">${data.email}</a></li>
            <li class="list-group-item">Office number: ${data.office}</li>
        </ul>
    </div>
</div>`
}
//function .push info

//data.name, data.id, data.email, data.github);
const engineerCard = (teamInfo) => {
    return `<div class="col" style="max-width: 19rem;">
    <div class="card-header bg-primary text-white text-capitalize">
        <p class="h5">${data.name}</p>
        <p></p> Engineer
    </div>
    <div class="card-body border bg-secondary bg-gradient" style="height:10rem">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:ducki@gmail.com"
                    target="_blank">${data.email}</a></li>
            <li class="list-group-item">Github Username: <a href="http://www.github.com/ducki"
                    target="_blank">${data.github}</a></li>
        </ul>
    </div>
</div>`
}
//function .push info

//data.name, data.id, data.email, data.school)
const internCard = (teamInfo) => {
    return `<div class="col" style="max-width: 19rem;">
    <div class="card-header bg-primary text-white text-capitalize">
        <p class="h5">${data.name}</p>
        <p></p> Intern
    </div>
    <div class="card-body border bg-secondary bg-gradient" style="height:10rem">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data.id}</li>
            <li class="list-group-item">Email: <a href="mailto:ducki@gmail.com"
                    target="_blank">${data.email}</a></li>
            <li class="list-group-item">School: ${data.school}</li>
        </ul>
    </div>
</div>`
}
//function .push info 

//set up to generate html
const teamMembers = []
const cardsHTML = ``
teamMembers.forEach(member => {
    switch (role) {
        case 'Manager':
            cardHTML = managerCard(member);
            break;
        case 'Engineer':
            cardHTML = engineerCard(member);
            break;
        case 'Intern':
            cardHTML = internCard(member); 
            break;
    }
})

cardsHTML = ``
generateHTML(cardHTML)

function init() {
    managerQ()
}

init()