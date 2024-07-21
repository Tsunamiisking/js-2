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

// const gender = ["male", "female"]

// const mappedGender = gender.map(element =>  ({value: element}))
// console.log(mappedGender)

// const people = [
//     {
//         name: "Allen",
//         age: "22",
//         gender: gender[0],
//         isHappy: false 

//     }, 
//     {
//         name: "Aaron",
//         age: "20",
//         gender: gender[0],
//         isHappy: true   
//     },
//     {
//         name: "Irene",
//         age: "18",
//         gender: gender[1],
//         isHappy: true   
//     }
// ]

// const happyPeople = people.filter(element => {
//     return element.gender == 'male' 
// })

// console.log(happyPeople)

// const nums = [5, 6, 5, 4, 7, 8, 2, 4 ]

// const total = nums.reduce((currentTotal, element) => {
//     return currentTotal + element
// })

// console.log(total)




// Advanced JS - Array manipulation 2

// const products = [
//     { name: "Product A", price: 150 },
//     { name: "Product B", price: 250 },
//     { name: "Product C", price: 320 },
//     { name: "Product D", price: 180 },
//     { name: "Product E", price: 450 },
//     { name: "Product F", price: 220 },
//     { name: "Product G", price: 400 },
//     { name: "Product H", price: 370 },
//     { name: "Product I", price: 300 },
//     { name: "Product J", price: 110 }
//   ];
  
  
  
// const ExpensiveProducts =  products.filter((element) => {
//     if (element.price >= 200) {
//         return element
//     }
//   })
  
//   ExpensiveProducts.forEach((e) => {
//     console.log(`Product Name: ${e.name} Price: ${e.price}`)
//   }) 




// Advanced JS - Array Promise 

// const foodIsReady = false; 
// let p = new Promise((resolve, reject) => {
//     if (foodIsReady) {
//         resolve('Okay you can eat now')
//     } else {
//         reject('Food is not ready')
//     }
// }) 

// p.then((message) => {
//     console.log(message)
// }).catch((message) => {
//     console.log(message)
// })


// Advanced JS - Array Promise 2

// const recordvideoOne = new Promise((resolve, reject) => {
//     resolve('Video One recording ')
// })

// const recordvideoTwo = new Promise((resolve, reject) => {
//     resolve('Video Two recording ')
// })

// const recordvideothree = new Promise((resolve, reject) => {
//     resolve('Video Three recording ')
// })

//  The Promise.all runs all the prommises simultaneously 

// Promise.all([
//     recordvideoOne,
//     recordvideoTwo,
//     recordvideothree
// ]).then((messages) => {
//     messages.forEach((element) => {
//         console.log(element)
//     })
// })

//  The Promise.race runs the promises given to it simultaneously but runs(returns) the first one first 

// Promise.race([
//     recordvideoOne,
//     recordvideoTwo,
//     recordvideothree
// ]).then((message) => {
//     console.log(message)
// })


let name = 'Strings'
for (const c of name){
    console.log(c)
}
