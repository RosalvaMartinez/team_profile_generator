// const Employee = require('')
//add manager replacevc
const Manager = require('../lib/manager');
//add office number at bottom
describe('Manager', () => {
    describe('getName', () => {
        it('should return name of manager', () => {
            const manager = new Manager()
            const teamMember = 'Ducki'
            manager.getName(teamMember)
            expect(manager.name).toBe('Ducki')
        })
    })
    describe('getId', () => {
        it('should return id of new manager', () => {
            const manager = new Manager()
            const id = '1234567890'
            manager.getId(id)
            expect(manager.id).toBe('1234567890')
        })
    })
    describe('getEmail', () => {
        it('Should bring back the email entered', () => {
            const manager = new Manager()
            const email = 'ducki@gmail.com'
            manager.getEmail(email)
            expect(manager.email).toBe('ducki@gmail.com')
        })
    })
    //chnage role to manager
    describe('getRole', () => {
        it('Should bring back the employee role selected', () => {
            const manager = new Manager()
            const role = 'Manager'
            manager.getRole(role)
            expect(manager.role).toBe('Manager')
        })
    })
    //add office number test for manager
    describe('getOffice', () => {
        it('Should bring back office number entered', () => {
            const manager = new Manager()
            const office = '1234567890'
            manager.getOffice(office)
            expect(manager.office).toBe('1234567890')
        })
    })
})