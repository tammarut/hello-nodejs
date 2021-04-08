function swimmer({ name }) {
  return {
    swim: () => {
      console.log(`🏊${name} swam`)
    },
  }
}

function flyer({ name }) {
  return {
    fly: () => {
      console.log(`🦅${name} flew`)
    },
  }
}

function attackerAndWalker({ name }) {
  return {
    attack: () => console.log(`🤺${name} attacked`),
    walk: () => console.log(`🚶${name} walked`),
  }
}

function swimmingMosterCreator(name) {
  const monster = { name: name }

  return {
    ...monster,
    ...attackerAndWalker(monster),
    ...swimmer(monster),
  }
}

function flyingMosterCreator(name) {
  const monster = { name: name }

  return {
    ...monster,
    ...flyer(monster),
  }
}

function flyingSwimmingMonsterCreator(name) {
  const monster = { name: name }

  return {
    ...monster,
    ...swimmer(monster),
    ...attackerAndWalker(monster),
    ...flyer(monster),
  }
}

const obj = flyingSwimmingMonsterCreator('John')
obj.swim()
obj.fly()
obj.walk()
obj.attack()
