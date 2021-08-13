// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength
  }

  attack () {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat.`;
    }
  }

  battleCry() {
    return 'Odin owns you all!'
  }
}

//let viking = new Viking('Alfredo', 100, 30)

//viking.receiveDamage(40);

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
      return `A saxon has received ${damage} points of damage`;
    } else {
      return `A saxon has died in act of combat.`;
    }
  }
}


// War
class War {
  vikingArmy = [];
  saxonArmy = [];

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
    let randomS = this.saxonArmy[randomSaxon];
   return randomS
  }

}

let war = new War();
war.addSaxon('alfredo')
war.addSaxon('Arturo')
war.addSaxon('matias')
war.addSaxon('Jorge')
 console.log(war.vikingAttack())

let newarray = new War()


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
