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
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/bootstrap@5.2/dist/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="p-5 mb-4 header bg-light">
        <div class="container">
        <div class="card" style="width: 18rem;">
        <div class="card-header">
        ${results.managerName}
        Manager
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${results.managerID}</li>
          <li class="list-group-item">Email: ${results.managerEmail}</li>
          <li class="list-group-item">${results.managerOfficeNum}</li>
        </ul>
      </div>
        </div>
    </header>
</body>`
};

function init() {
    managerQ()
}

init()