prompts = {
    manager: [
        {
            message: 'What is your team managers name?',
            type: 'input',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
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
                if (idInput) {
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
                if (emailInput) {
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
                if (officeInput) {
                    return true
                } else {
                    console.log("Please enter managers office number?")
                }
            }
        }
    ],
    engineer: [
        {
            message: 'What is your engineers name?',
            type: 'input',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
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
                if (idInput) {
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
                if (emailInput) {
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
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your engineers GitHub username?")
                }
            }
        }
    ],
    intern: [
        {
            message: 'What is your interns name?',
            type: 'input',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
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
                if (idInput) {
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
                if (emailInput) {
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
                if (schoolName) {
                    return true
                } else {
                    console.log("Please enter your interns school.")
                }
            }
        }
    ],
    menu: [
        {
            message: 'Choose the next team member profile you would like to add next?',
            type: 'list',
            choices: ['Engineer', 'Intern', 'Finished'],
            name: 'menu'
        }
    ],
}

module.exports = prompts