const Engineer = require('../lib/Engineer');
describe('Engineer class', () => {
    test('Creates an engineer object with dummy values', () => {
        const engineer = new Engineer('Whiskey', '654321', 'whiskey@yahoo.com', 'whiskey@github.com')
        expect(engineer.getName()).toBe('Whiskey')
        expect(engineer.getId()).toBe('654321')
        expect(engineer.getEmail()).toBe('whiskey@yahoo.com')
        expect(engineer.getGH()).toBe('whiskey@github.com')
        expect(engineer.getRole()).toBe('Engineer')
    })
})

