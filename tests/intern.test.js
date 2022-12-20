// const Employee = require('')
const Intern = require('../lib/intern');
//chnage engineer to intern and add intern school test to replace git hub
describe('Intern class', () => {
    test('Creates an Intern object with dummy values', () => {
        const intern = new Intern('Bruce', '67890', 'bruce@gmail.com', 'UTSA')
        expect(intern.getName()).toBe('Bruce')
        expect(intern.getId()).toBe('67890')
        expect(intern.getEmail()).toBe('bruce@gmail.com')
        expect(intern.getSchool()).toBe('UTSA')
    })
})
// describe('Intern', () => {
//     describe('getName', () => {
//         it('Should bring back the name entered', () => {
//             const intern = new Intern()
//             const teamMember = 'Ducki'
//             intern.getName(teamMember)
//             expect(intern.name).toBe('Ducki')
//         })
//     })
//     describe('getId', () => {
//         it('Should bring back the ID entered', () => {
//             const intern = new Intern()
//             const id = '1234567890'
//             intern.getId(id)
//             expect(intern.id).toBe('1234567890')
//         })
//     })
//     describe('getEmail', () => {
//         it('Should bring back the email entered', () => {
//             const intern = new Intern()
//             const email = 'ducki@gmail.com'
//             intern.getEmail(email)
//             expect(intern.email).toBe('ducki@gmail.com')
//         })
//     })
//     describe('getRole', () => {
//         it('Should bring back the employee role selected', () => {
//             const intern = new Intern()
//             const role = 'Intern'
//             intern.getRole(role)
//             expect(intern.role).toBe('Intern')
//         })
//     })
//     //add intern school test hehe
//     describe('getSchool', () => {
//         it('Should bring back school entered', () => {
//             const intern = new Intern()
//             const school = 'DuckUniversity'
//             intern.getSchool(school)
//             expect(intern.school).toBe('DuckUniversity')
//         })
//     })
// })