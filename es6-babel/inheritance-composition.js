// 💡 Inheritance
class Person {
  eat() {
    console.log('I am eating')
  }
  breathe() {
    console.log('I am breathing')
  }
  swim() {
    console.log('I am swimming')
  }
}

class Magician extends Person {
  trick() {
    console.log('I am doing a trick')
  }
}

const Liv = new Magician()
const Harry = new Magician()

// 🤠 Liv
Liv.trick()
Liv.eat()
Liv.breathe()
Liv.swim()

// 🤕 Harry
Harry.trick()
Harry.eat()
Harry.breathe()
Harry.swim()

// 🛡 Composition
function eatSkill() {
  return {
    eat: () => console.log('❤️  I am eating'),
  }
}

function breatheSkill() {
  return {
    breathe: () => console.log('🧡 I am breathing.'),
  }
}

function swimSkill() {
  return {
    swim: () => console.log('💛 I am swimming.'),
  }
}

function trickSkill() {
  return {
    trick: () => console.log('💚 I am tricking.'),
  }
}

const superMagician = () => {
  return Object.assign({}, eatSkill(), breatheSkill(), trickSkill())
}

const noviceMagician = () => {
  return Object.assign({}, eatSkill(), breatheSkill(), swimSkill())
}

// 🤠 Harry can't swim
const harry = superMagician()
harry.trick()
harry.eat()
harry.breathe()

// 🤕 Liv can't trick
const liv = noviceMagician()
liv.eat()
liv.breathe()
liv.swim()
