/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  changeName: function (newName) {
    if (typeof newName === "string") {
      this.name = newName;
      console.log("Our backpack's nickname is: " + backpack.name);
    }
  },
  volume: 30,
  changeVolume: function (newVolume) {
    if (newVolume > 0) {
      this.volume = newVolume;
      console.log("Our backpack has a volume of: " + backpack.volume);
    }
  },
  color: "grey",
  changeColor: function (newColor) {
    const a = "red";
    const b = "blue";
    const c = "green";
    const d = "weathered";
    if (newColor == 'a') {
      this.color = a;
    } else if (newColor ==  'b') {
      this.color = b;
    } else if (newColor ==  'c') {
      this.color = c;
    } else if (newColor ==  'd') {
      this.color = d;
    }
    console.log("Our backpack is now: " + backpack.color);
  },
  pocketNum: 15,
  addRemoveAPocket: function (add, subtract) {
    if (add > 0) {
      this.pocketNum = this.pocketNum + add; 
    }
    if (subtract > 0) {
      this.pocketNum = this.pocketNum - subtract; 
    }
    console.log("Our backback has " + this.pocketNum + " pockets now.")
  },
  strapLength: {
    left: 26,
    right: 26,
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

console.log("Backpack: ", backpack);