const Employee = require('../lib/employee');
// const Employee = require('')

describe('Employee', () => {
    describe('getName', () => {
    it('Should bring back the name entered', () => {
        const employee = new Employee()
        const teamMember = 'Ducki'
        employee.getName(teamMember)
        expect(employee.name).toBe('Ducki')
    })
    })

    describe('getId', () => {
        it('Should bring back the ID entered', () => {
            const employee = new Employee()
            const id = '1234567890'
            employee.getId(id)
            expect(employee.id).toBe('1234567890')
        })
    })
    describe('getEmail', () => {
        it('Should bring back the email entered', () => {
            const employee = new Employee()
            const email = 'ducki@gmail.com'
            employee.getEmail(email)
            expect(employee.email).toBe('ducki@gmail.com')
        })
    })
    describe('getRole', () => {
        it('Should bring back the employee role selected', () => {
            const employee = new Employee()
            const role = 'Employee'
            employee.getRole(role)
            expect(employee.role).toBe('Employee')
        })
    })
})