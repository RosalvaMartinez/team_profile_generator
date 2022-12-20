// const inquirer = require('inquirer');
// import fs = require('fs');
//new version of inquirer requires imports

//just some notes for myself
//first letters in require path need to be capitalized in tests 
//github vs GH might be issue?
import * as fs from 'fs';
import inquirer from 'inquirer';
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//make emptyarray

var managerPrompts = [
    //prompt to enter the team manager’s name, employee ID, email address, and office number
    {
        type: 'input',
        message: 'What is your team managers name?',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'What is your team managers employee ID?',
        name: 'managerID'
    },
    {
        type: 'input',
        message: 'What is your team managers email?',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'What is your managers office number?',
        name: 'managerOfficeNum'
    }
]
//////////////////////////////////
const managerQ = () => {
    inquirer.prompt([
        {
            message: 'What is your team managers name?',
            type: 'input',
            name: 'name',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("Please enter  your team managers name.")
                }
            }
        },
        {
            message: 'What is your team managers employee ID?',
            type: 'input',
            name: 'id',
            validate: idInput => {
                if(idInput){
                    return true
                } else {
                    console.log("Please enter your team managers employee ID")
                }
            }
        },
        {
            message: 'What is your team managers email?',
            type: 'input',
            name: 'email',
            validate: emailInput => {
                if(emailInput){
                    return true
                } else {
                    console.log("Please enter your team managers email?")
                }
            }
        },
        {
            message: 'What is your team managers office number?',
            type: 'input',
            name: 'officeNumber',
            validate: officeInput => {
                if(officeInput){
                    return true
                } else {
                    console.log("Please enter managers office number?")
                }
            }
        }
        ///add then withn data and push
        //tehn add menu func = engineer intern r u finished
    ]).then(data => {
        console.log(data)
        const manager = new Manager (data.name, data.id, data.email, data.office)
        teamInfo.push(manager)
        console.log(team)
        menu()
    })
}
///////////////////////////////////
var menuPrompts = [
    {
        type: 'choice',
        message: 'Choose the next team member profile you would like to add next?',
        choices: ['Engineer, Intern, Finished'],
        name: 'menu'
    }
]
//////////////////////////////////
//select from menu options for next team member
const menu = () => {
    return inquirer.prompt([
        {
            message: 'Choose the next team member profile you would like to add next?',
            type: 'list',
            choices: ['Engineer', 'Intern', 'Finished'],
            name: 'menu'
        }
        //add then with switch case like last challenge!!!! reference
    ]).then(selected => {
        switch(selected.menu){
            case 'Engineer':
                engineerQ();
                break;
            case 'Intern':
                internQ();
                break;
            case 'Finished':
                buildTeam();
        }
    })    
}
//////////////////////////////////
var engineerPrompts = [
    //present with a menu with the option to add an engineer or an intern or to finish building my team
    //create code for a menu w choices >engineer >intern >finished


    //engineer option selected
    //prompt to enter the engineer’s name, ID, email, and GitHub username, and take back to the menu
    {
        type: 'input',
        message: 'What is your engineers name?',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'What is your engineers employee ID?',
        name: 'engineerID'
    },
    {
        type: 'input',
        message: 'What is your engineers email?',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'What is your engineers GitHub username?',
        name: 'engineerGitHub'
    }
]
////////////////////////////////
//engineer function
const engineerQ = () => {
    return inquirer.prompt([
        {
            message: 'What is your engineers name?',
            type: 'input',
            name: 'name',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log('Please enter your engineers name.')
                }
            }
        },
        {
            message: 'What is your engineers employee ID?',
            type: 'input',
            name: 'id',
            validate: idInput => {
                if(idInput){
                    return true
                } else {
                    console.log("Pease enter your engineers employee ID")
                }
            }
        },
        {
            message: 'What is your engineers email?',
            type: 'input',
            name: 'email',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log("Please enter your engineers email")
                }
            }
        },
        {
            //github vs GH issue *red flag*
            message: 'What is your engineers GitHub username?',
            type: 'input',
            name: 'github',
            validate: githubInput => {
                if(githubInput){
                    return true;
                } else {
                    console.log("Please enter your engineers GitHub username?")
                }
            }
        }
                ///add then withn data and push
        //tehn add menu func = engineer intern r u finished 
    ]).then(data => {
        console.log(data);
        const engineer = new Engineer (data.name, data.id, data.email, data.github);
        teamInfo.push(engineer);
        console.log(team);
        menu();
    })
} 
////////////////////////////////
var internPrompts = [
    //intern option selected
    //prompt to enter the intern’s name, ID, email, and school, and take back to the menu
    {
        type: 'input',
        message: 'What is your interns name?',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'What is your interns employee ID?',
        name: 'internID'
    },
    {
        type: 'input',
        message: 'What is your interns email?',
        name: 'internsEmail'
    },
    {
        type: 'input',
        message: 'What is your interns school?',
        name: 'internSchool'
    }
]
////////////////////////////////
//questions for intern role
const internQ = () => {
    return inquirer.prompt([
        {
            message: 'What is your interns name?',
            type: 'input',
            name: 'name',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("Please enter your interns name.")
                }
            }
        },
        {
            message: 'What is your interns employee ID?',
            type: 'input',
            name: 'id',
            validate: idInput => {
                if(idInput){
                    return true
                } else {
                    console.log("Please enter your interns employee ID.")
                }
            }
        },
        {
            message: 'What is your interns email?',
            type: 'input',
            name: 'email',
            validate: emailInput => {
                if(emailInput){
                    return true;
                } else {
                    console.log("Please enter your interns email.");
                }
            }
        },
        {
            message: 'What is your interns school?',
            type: 'input',
            name: 'school',
            validate: schoolName => {
                if(schoolName){
                    return true
                }else {
                    console.log("Please enter your interns school.")
                }
            }
        }
        ///add then withn data and push
        //tehn add menu func = engineer intern r u finished
    ]).then(data => {
        console.log(data);
        const intern = new Intern (data.name, data.id, data.email, data.school);
        teamInfo.push(intern);
        console.log(team);
        menu();
    })
} 
////////////////////////////////

//Empty array for data input to create cards
const teamInfo = []

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
}

// const createManager = data => {
    //manager information = generate HTML Card 
    // inquirer.prompt(menu);


// const createEngineer = data => {
    // let engineerInfor = generateCard(data)
    // inquirer.prompt(menu);


// const createIntern = data => {
    //let internInfo = generateCard(data)
    // inquirer.prompt(menu);


//generateCard()
//function with card template 

//function to initialize application
//const init = () => {
//     inquirer.createPromptModule(managerQuestions)
//         .then() <-- add writeFile function
// }
//init();

inquirer.prompt(managerPrompts)
    .then((managerResults) => {
        // const htmlPageContent = generateHTML(results);
        console.log(managerResults)
        //newly made index saves in output folder

    });

// fs.writeFile('output/index.html', htmlPageContent, (err) =>
//     err ? console.log(err) : console.log('GO DUCKI')
// );


//fs.writeFile(filename, JSON.stringify(data,null,'\t'), (err) =>



// function init() {
//     fs.writeFile("output/" + fileName, markDown, function(err) {
//         if(err) {
//             return console.log(err);
//         }
//         console.log("The file was saved!");
//     }); 
// }

// init()