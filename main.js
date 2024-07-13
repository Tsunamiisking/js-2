// Advanced JS - Prototyping
// function Person(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
// }



// Person.prototype.returnFullName = function () {
//     console.log(`${this.firstName} ${this.lastName}`)
// }

// const newPerson = new Person("Allen", "Douglas")

// newPerson.returnFullName()



// Advanced JS - Array Manipulation

const gender = ["male", "female"]

const mappedGender = gender.map(element =>  ({value: element}))
console.log(mappedGender)

const people = [
    {
        name: "Allen",
        age: "22",
        gender: gender[0],
        isHappy: false 

    }, 
    {
        name: "Aaron",
        age: "20",
        gender: gender[0],
        isHappy: true   
    },
    {
        name: "Irene",
        age: "18",
        gender: gender[1],
        isHappy: true   
    }
]

const happyPeople = people.filter(element => {
    return element.gender == 'male' 
})

console.log(happyPeople)