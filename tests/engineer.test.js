// const Employee = require('')
const Engineer = require('../lib/engineer');
//replace with "enginner" 
//add
//asd github test bottom
describe('Engineer', () => {
    describe('getName', () => {
        it('Should bring back the name entered', () => {
            const engineer = new Engineer()
            const teamMember = 'Ducki'
            engineer.getName(teamMember)
            expect(engineer.name).toBe('Ducki')
        })
    })
    describe('getId', () => {
        it('Should bring back the ID entered', () => {
            const engineer = new Engineer()
            const id = '1234567890'
            engineer.getId(id)
            expect(engineer.id).toBe('1234567890')
        })
    })
    describe('getEmail', () => {
        it('Should bring back the email entered', () => {
            const engineer = new Engineer()
            const email = 'ducki@gmail.com'
            engineer.getEmail(email)
            expect(engineer.email).toBe('ducki@gmail.com')
        })
    })
    //cahnge role to engineer
    describe('getRole', () => {
        it('Should bring back the employee role selected', () => {
            const engineer = new Engineer()
            const role = 'Engineer'
            engineer.getRole(role)
            expect(engineer.role).toBe('Engineer')
        })
    })
    //add git hub test wahh
    describe('getGH', () => {
        it('Should bring back github entered', () => {
            const engineer = new Engineer()
            const github = 'duckilongbottom'
            engineer.getGH(github)
            expect(engineer.github).toBe('duckilongbottom')
        })
    })
})