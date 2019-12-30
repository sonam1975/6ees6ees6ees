class HoneyMakerBee {
  constructor() {
    this.age = 10;
    this.job = 'make honey';
    var bee = new Bee;
    this.color = bee.color;
    this.food = bee.food;
    this.honeyPot = 0;
    this.eat = bee.eat;

  }

  makeHoney() {
    return this.honeyPot++;
  }
  giveHoney() {
    return this.honeyPot--;
  }
};
