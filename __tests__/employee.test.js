const Employee = require('../lib/Employee');

describe('Employee class', () => {
    test('Creates an employee object with dummy values', () => {
        const employee = new Employee('Ducki', '123456', 'ducki@gmail.com')
        expect(employee.getName()).toBe('Ducki')
        expect(employee.getId()).toBe('123456')
        expect(employee.getEmail()).toBe('ducki@gmail.com')
        expect(employee.getRole()).toBe('Employee')
    })
})
