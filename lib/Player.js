const Potion = require('../lib/Potion');

function Player(name = '') {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion('health'), new Potion()];

  // Returns an object with various player properties
  Player.prototype.getStats = function () {
    return {
      potions: this.inventory.length,
      health: this.strength,
      strength: this.strength,
      agility: this.agility,
    };
  };

  // Returns the inventory array or false if empty
  Player.prototype.getInventory = function () {
    if (this.inventory.length) {
      return this.inventory;
    }

    return false;
  };
}

module.exports = Player;
