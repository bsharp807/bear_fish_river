const River = require('../river');
const Bear = require('../bear');
const Fish = require('../fish');

describe('fish', () =>{
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

  test('check if fish has a name', () => {
    river.birthFish(new Fish('fishy fred'));
    expect(river.fish[river.fish.length-1].name).toBe('fishy fred');
  });
});
