const Employee = require('./employee')
//add gH class psrt
//cahnge to engineer
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    
        getGH() {
            return this.github
        }

        getRole() {
            return "Engineer"
        }

    }


module.exports = Engineer
