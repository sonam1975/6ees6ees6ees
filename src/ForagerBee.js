class ForagerBee {
  constructor() {
    this.age = 10;
    this.job = 'find pollen';
    var bee = new Bee;
    this.color = bee.color;
    this.food = bee.food;
    this.eat = bee.eat;
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    return this.treasureChest.push(treasure);
  }

};
