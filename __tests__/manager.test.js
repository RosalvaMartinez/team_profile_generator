const Manager = require('../lib/Manager');
describe('Manager class', () => {
    test('Creates a manager object with dummy values', () => {
        const manager = new Manager('Goose', '4567890', 'goose@gmail.com', '123A')
        expect(manager.getName()).toBe('Goose')
        expect(manager.getId()).toBe('4567890')
        expect(manager.getEmail()).toBe('goose@gmail.com')
        expect(manager.getOffice()).toBe('123A')
        expect(manager.getRole()).toBe('Manager')
    })
})
