let person = {
  age: 25,
  gender: 'male',
  name: {
    firstName: 'dewy',
    lastName: 'kishou',
  },
}

// Common ES5
//let age = person.age
//let genger = person.gender
//let name = person.name
//let firstName = name.firstName
//let lastName = name.lastName

// Destructuring
//let { gender, name, age } = person
//console.log(name)
//let { firstName, lastName } = name
let {
  age,
  gender,
  name: { firstName, lastName },
} = person

// Spread Operator
let obj1 = { a: 1, b: 2 }
let obj2 = { c: 3, d: 4 }
console.log({ ...obj1, ...obj2 })

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log([...arr1, ...arr2])

// Arrow Function
// ES5
//function hi(arguments) {}

// ES6
//arguments => {}

const fn = () => 3
console.log(fn())
const arr3 = [2, 3, 4]
let newarr3 = arr3
console.log('Before:', arr3)
newarr3 = arr3.map(item => item * 2)
console.log('After:', newarr3)

// Default values
// ES5
function foo(gender) {
  gender = gender || 'male'
}

//ES6
function foo(gender = 'male') {}

// ES5
function request(options) {
  var method = options.method || 'GET'
  var ssl = options.ssl || false
  console.log(method)
}
request({})

//ES6
function request({ method = 'GET', ssl = false }) {
  console.log(method)
}
request({})

//Class
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  walk() {
    console.log('walking...')
  }

  print() {
    console.log(`My name is ${this.name}`)
    console.log(`age: ${this.age}`)
  }
}

const guy = new Person('Arima', 20)
guy.walk()
guy.print()

// Inhteritance by extends
class Female extends Person {
  constructor(name, age, gender) {
    super(name, age)
    this.gender = gender
  }
  show() {
    console.log(super.print())
    console.log(`gender: ${this.gender}`)
  }
}

const lady = new Female('June', 10, 'female')
lady.show()
