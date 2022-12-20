// const inquirer = require('inquirer');
// import fs = require('fs');
//new version of inquirer requires imports

//just some notes for myself
//first letters in require path need to be capitalized in tests 
//github vs GH might be issue?
const fs = require('fs')
const inquirer = require('inquirer')// import prompts from './lib/prompts.js'
// import Manager from './lib/manager.js'
// import Engineer from './lib/engineer.js'
// import Intern from './lib/intern.js'
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
            console.log(data)
            const manager = new Manager(data.name, data.id, data.email, data.office)
            teamObjects.push(manager)
            console.log(teamObjects)
            //menu()
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
        console.log(data);
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamInfo.push(engineer);
        console.log(teamObjects);
        menu();
    })
}

//questions for intern role
const internQ = () => {
    inquirer.prompt(prompts.intern).then(data => {
        console.log(data);
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamInfo.push(intern);
        console.log(teamObjects);
        menu();
    })
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