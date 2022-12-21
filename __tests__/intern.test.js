const Intern = require('../lib/Intern');
describe('Intern class', () => {
    test('Creates an Intern object with dummy values', () => {
        const intern = new Intern('Bruce', '67890', 'bruce@gmail.com', 'UTSA')
        expect(intern.getName()).toBe('Bruce')
        expect(intern.getId()).toBe('67890')
        expect(intern.getEmail()).toBe('bruce@gmail.com')
        expect(intern.getSchool()).toBe('UTSA')
        expect(intern.getRole()).toBe('Intern')
    })
})
