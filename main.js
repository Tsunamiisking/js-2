// Advanced JS - Prototyping
function Person(fname, lname) {
    this.firstName = fname;
    this.lastName = lname;
}



Person.prototype.returnFullName = function () {
    console.log(`${this.firstName} ${this.lastName}`)
}

const newPerson = new Person("Allen", "Douglas")

newPerson.returnFullName()