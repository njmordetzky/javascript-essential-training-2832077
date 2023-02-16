/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const todaysOutingPack = new Backpack(
  "Today's Outing Pack",
  20,
  "green",
  20,
  6,
  6,
  false
);

console.log("Today's Outing Pack object:", todaysOutingPack);
console.log("Today's Outing Pack color:", todaysOutingPack.color);