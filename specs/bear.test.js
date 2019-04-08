const River = require('../river');
const Bear = require('../bear');
const Fish = require('../fish');

describe('bear', () =>{
  let fishOne;
  let fishTwo;
  let fishThree;
  let fishFour;

  let river;

  let bear;

  beforeEach(() => {
    fishOne = new Fish('fish one');
    fishTwo = new Fish('fish two');
    fishThree = new Fish('fish three');
    fishFour = new Fish('fish four');

    river = new River('Feshie', [fishOne, fishTwo, fishThree, fishFour]);

    bear = new Bear('Vojtek','Syrian Brown Bear', river);
  })

  test('a bear should have a name ', () =>{
    expect(bear.name).toBe('Vojtek');
  });

  test ('a bear should have a type', () =>{
    expect(bear.type).toBe('Syrian Brown Bear');
  });

  test ('a bear should have an empty belly', () =>{
    expect(bear.foodCount()).toBe(0);
  });

  test ('a bear should have a roar method', () =>{
    expect(bear.bearRoar()).toBe('RAARRR');
  });

  test ('a bear should have a food count method', () =>{
    bear.eatFish(fishTwo);
    expect(bear.foodCount()).toBe(1);
  });

  test ('a bear should be able to take a fish from the river', () =>{
    bear.eatFish(fishTwo);
    expect(river.fish.length).toBe(3);
  });
});
