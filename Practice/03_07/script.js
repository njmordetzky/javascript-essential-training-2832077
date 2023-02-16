/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const candleHolder = {
  itsMadeOf: ['glass', 'concrete'],
  itCosts: 10 + " dollars",
  itsHeight: 6 + " inches",
  itsWidth: "5 inches",
  itsWeight: "2 Pounds",
  candle: {
    litCandle: false,
    liteCandle: function(candleState) {
      this.litCandle = candleState,
      console.log("you successfully lit a candle:", candleHolder.candle.litCandle)
    }
  },
  canBeUsedWith: {
    tallCandle: false,
    mediumCandle: false,
    smallCandle: true,
    teaLight: true,
  }
}

const mug = {
  itsDecoratedWith: "a butterfly, flowers, and water",
  itHasAHandle: true,
  itsMicrowaveSafe: true,
  itsMadeOf: 'porcelain'
}

console.log("Candelholder", candleHolder);
console.log("Mug", mug);


// Feb 4 2022
const pot = {
  shape: "circular",
  material: "ceramic",
  size: "small",
  dripHole: false,
  filledWith: {
    soil: true,
    hasPlant: true,
    plantType: "lavendar",
  },
  pottedPlantWatered: false,
  waterPlant: function (boolean) {
    if (hasPlant = true) {
      this.pottedPlantWatered = boolean;
    } 
    else {
      window.prompt("There's no plant to water here");
    }
  }
}

console.log("Pot", pot);