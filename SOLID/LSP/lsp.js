class FlyingBird {
  fly() {
    console.log('I can fly🐦')
  }
}

class SwimmingBird {
  swim() {
    console.log('I can swim🏊')
  }
}

class Duck extends FlyingBird  {
  quack() {
    console.log('I can quack')
  }
}

class Penguin extends SwimmingBird {
 }

const makeFlyingBirdFly = bird => {
  bird.fly()
}

const makeSwimminBirdSwim = bird => {
  bird.swim()
}

// ----------New Object------------
const duck = new Duck()
const penguin = new Penguin()

makeFlyingBirdFly(duck)
makeSwimminBirdSwim(penguin)
