class Employee {
    constructor(name, id, email) {
        //this. = name
        //this.id = id
        //this.email = email
        //
        //
        this.name = name
        this.id = id
        this.email = email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
//getId() {
    //return this.id
//}
    getRole() {
        return "Employee"
    }
}

module.exports = Employee;