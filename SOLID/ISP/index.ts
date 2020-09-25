interface Movable {
  move(): void
}

interface Attacker {
  attack(): void
}

interface Blinker {
  blink(distance: number): void
}

abstract class Hero implements Movable, Attacker {
  abstract move(): void
  abstract attack(): void
}

class Walk implements Movable{
  move(){
    console.log("🚶walk")
  }
}
class Slither implements Movable{
  move(){
    console.log('🐍Slither')
  }
}
class Fly implements Movable{
  move(){
    console.log('🦋Fly')
  }
}

class MaleeAttacker implements Attacker {
  attack(){
    console.log('👊Malee attack')
  }
}
class RangeAttacker implements Attacker {
  attack(){
    console.log("🏹Range attack")
  }
}

class BlinkerImpl implements Blinker{
  constructor(private maxDistance: number){}

  blink(distance: number){
    if (distance < this.maxDistance){
      console.log('You can blink🌀') 
    } else {
      (console.log('Out of range!🚫'))
    } 
  }
}

// ——————— Hero classes ——————— 
class BloodSekker extends Hero{
  walk: Walk
  maleeAttack: MaleeAttacker
  
  move(){
    this.walk.move()
  }

  attack(){
    this.maleeAttack.attack()
  }
}

class Slardar extends Hero {
  slither: Slither
  maleeAttack: MaleeAttacker

  move(){
    this.slither.move()
  }

  attack(){
    this.maleeAttack.attack()
  }
}

class QueenOfPain extends Hero implements Blinker {
  walk: Walk
  rangeAttack: RangeAttacker
  blinkImpl: BlinkerImpl = new BlinkerImpl(700)

  move(){
    this.walk.move()
  }

  attack(){
    this.rangeAttack.attack()
  }

  blink(distance: number){
    this.blinkImpl.blink(distance)
  }
}

class AntiMage extends Hero implements Blinker{
  walk: Walk
  maleeAttack: MaleeAttacker
  blinkImpl: BlinkerImpl = new BlinkerImpl(900)
  
  move(){
    this.walk.move()
  }

  attack(){
    this.maleeAttack.attack()
  }

  blink(distance: number){
    this.blinkImpl.blink(distance)
  }
}
