const Employee = require('../lib/employee');

describe('Employee class', () => {
    test('Creates an employee object with dummy values', () => {
        const employee = new Employee('Ducki', '123456', 'ducki@gmail.com')
        expect(employee.getName()).toBe('Ducki')
        expect(employee.getId()).toBe('123456')
        expect(employee.getEmail()).toBe('ducki@gmail.com')
    })
})
// describe('Employee', () => {
//     describe('getName', () => {
//     it('Should bring back the name entered', () => {
//         const employee = new Employee()
//         const teamMember = 'Ducki'
//         employee.getName(teamMember)
//         expect(employee.name).toBe('Ducki')
//     })
//     })

//     describe('getId', () => {
//         it('Should bring back the ID entered', () => {
//             const employee = new Employee()
//             const id = '1234567890'
//             employee.getId(id)
//             expect(employee.id).toBe('1234567890')
//         })
//     })
//     describe('getEmail', () => {
//         it('Should bring back the email entered', () => {
//             const employee = new Employee()
//             const email = 'ducki@gmail.com'
//             employee.getEmail(email)
//             expect(employee.email).toBe('ducki@gmail.com')
//         })
//     })
//     describe('getRole', () => {
//         it('Should bring back the employee role selected', () => {
//             const employee = new Employee()
//             const role = 'Employee'
//             employee.getRole(role)
//             expect(employee.role).toBe('Employee')
//         })
//     })
// })