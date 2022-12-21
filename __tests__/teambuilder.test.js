const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')
const Manager = require('../lib/manager')

describe('Team Builder', () => {
    test('Create a dummy team using dummy data', () => {
        const employee = new Employee('Ducki', '123456', 'ducki@gmail.com')
        const engineer = new Engineer('Whiskey', '654321', 'whiskey@yahoo.com')
        const intern = new Intern('Bruce', '67890', 'bruce@gmail.com')
        const manager = new Manager('Goose', '4567890', 'goose@gmail.com')
    })  
})