/**
 * Working with array methods
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
 */

let backpackContents = ["piggy", "headlamp", "pen"];
console.log(backpackContents.join(" | "));


console.log(backpackContents);

backpackContents.unshift("Tess book", "iPhone 7");
console.log(backpackContents.join(" | "));

backpackContents.forEach(function (arrayIndex) {
  item = `<li>${arrayIndex}</li>`;
  console.log(item);
});

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);
