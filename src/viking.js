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
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];
    let battle = randomSaxon.receiveDamage(randomViking.strength)
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1)
    }
   return battle 
  }

  saxonAttack() {
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomSaxon = this.saxonArmy[randomSaxonIndex];
    let randomViking = this.vikingArmy[randomVikingIndex];
    let battle = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1)
    }
  }

  showStatus() {
    if (this.vikingArmy.length > this.saxonArmy.length) {
      return `“Honor and daring, valor, strength and agility, all these were qualities the Vikings prized and upheld." The vikings have won the war.`;
    } else if (this.vikingArmy.length < this.saxonArmy.length) {
      return `“A hungry wolf is bound to wage a hard battle.” The saxons have won the war.`;
    } else if (this.vikingArmy.length === this.saxonArmy.length) {
      return `“Numbers cannot skill withstand.” The vikings and saxons are still in the heat of the battle.`;
    }
  }

}
let gorm = new Viking('Gorm', 550, 225);
let halfdan = new Viking('Halfdan', 400, 300);
let torsten = new Viking('Torsten', 800, 150);
let gudrun = new Viking('Gudrun', 600, 240);
let birger = new Saxon(600, 420)
let bjorn = new Saxon(400, 240)
let bodil = new Saxon(750, 320)
let sigrid = new Saxon(580, 210)

let war = new War();
war.addSaxon(birger);
war.addSaxon(bjorn);
war.addSaxon(bodil)
war.addSaxon(sigrid)
war.addViking(gorm);
war.addViking(halfdan);
war.addViking(torsten)
war.addViking(gudrun)
console.log(war.vikingAttack())
war.saxonAttack();
console.log(war.vikingArmy);



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
