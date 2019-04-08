const River = require('./river');
const Bear = require('./bear');
const Fish = require('./fish');

const fishOne = new Fish('fish one');
const fishTwo = new Fish('fish two');
const fishThree = new Fish('fish three');
const fishFour = new Fish('fish four');

const river = new River('Feshie', [fishOne, fishTwo, fishThree, fishFour]);

const bear = new Bear('Vojtek','Syrian Brown Bear', river);

// console.log(bear);
// console.log(river);
// console.log(river.fishCount());
// bear.eatFish(fishOne);
// console.log(river.fishCount());
// console.log(river.fish);
// console.log(bear.foodCount());
// console.log(bear.bearRoar());
river.birthFish(new Fish('fish five'));
console.log(river.fish);
