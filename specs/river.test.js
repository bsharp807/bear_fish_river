const River = require('../river');
const Bear = require('../bear');
const Fish = require('../fish');

describe('river', () =>{
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

  test('check if river has name', () =>{
    riverTwo = new River('Nile', []);
    expect(riverTwo.name).toBe('Nile');
  });

  test('river should hold many fish', () =>{
    expect(river.fish.length)>1 ;
  });
  test('river should have a fishCount method', () =>{
    expect(river.fishCount()).toBe(4);
  });

});
