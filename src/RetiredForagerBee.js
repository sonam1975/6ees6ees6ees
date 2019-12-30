class RetiredForagerBee {
  constructor() {
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    var foragerBee = new ForagerBee;
    this.food = foragerBee.food;
    this.eat = foragerBee.eat;
    this.treasureChest = foragerBee.treasureChest;
  }
  forage() {
    return 'I am too old, let me play cards instead'
  }
  gamble(treasure) {
    return this.treasureChest.push(treasure);
  }
};
