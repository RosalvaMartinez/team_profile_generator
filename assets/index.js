const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ managerName, managerID, managerEmail, managerOfficeNum }) =>
//insert some html between ``
    `<!DOCTYPE html>
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
            <h1 class="display-4">Manager: ${managerName}</h1>
            <ul class="list-group">
                <li class="list-group-item">ID: ${managerID}</li>
                <li class="list-group-item">Email: ${managerEmail}</li>
                <li class="list-group-item">Office Number: ${managerOfficeNum}</li>
            </ul>
        </div>
    </header>
</body>`


inquirer
    .prompt([
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
        },
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
        },
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
    ]);
    //needs work, pass in data 
    //visit .then documentation
    .then((someData) => {
        const htmlPageContent = generateHTML(someData);

        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('GO DUCKI')
        );
    });



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