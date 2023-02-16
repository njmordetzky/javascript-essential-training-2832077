/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};


// dot notation
console.log("The backpack object:", backpack);
console.log("How many pockets:", backpack.pocketNum);
console.log("Left strap length:", backpack.strapLength.left);

// bracket notation
console.log("How many pockets:", backpack["pocketNum"]);

var changepockets = "pocketNum";
console.log("How many pockets:", backpack[changepockets]);

