/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

// document.querySelectorAll("#pack02 .feature.backpack__color").forEach(item => item.style.color = "green");


var querySelectorAllResults = document.querySelectorAll(".feature.backpack__color");
console.log(querySelectorAllResults);
// querySelectorResults.forEach(item => item.style.color = "green");


var querySelectorResults = document.querySelector("#pack02 .feature.backpack__color");
console.log(querySelectorResults);
querySelectorResults.style.color = "green";

var newCopy = document.createElement('p');
newCopy.textContent = 'Popularity: in vogue';
querySelectorResults.appendChild(newCopy);

// document.querySelector("h1").className = "fake-class"

var classNameHolder = document.querySelector("article h1").classList.replace("backpack__name", "i-changed-the-class");
console.log(classNameHolder);

// Add 2 new classes to an element
document.querySelector(".page-header__heading").classList.add("class-2", "class-3")

// Remove an element's class
document.querySelector(".page-header__heading").classList.remove("class-2")

// Add an attribute to an element
document.querySelector(".i-changed-the-class").setAttribute("style", "")

// Target an element and change the value of an attribute
document.querySelector(".i-changed-the-class").style.textDecoration = "underline"

// Request the value of an attribute
console.log(document.querySelector(".i-changed-the-class").getAttribute("class"))

// Change the value of an attribute
document.querySelector("form.leftlength").setAttribute("data-children-count", "32")

// Add inline CSS to an element
document.querySelector(".i-changed-the-class").style.backgroundColor = "red"
document.querySelector(".i-changed-the-class").style.borderBottom = "60px solid #ff5500"

// Add new DOM element
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "https://i.etsystatic.com/17857814/r/il/e5cda0/1659319694/il_570xN.1659319694_d9ue.jpg"
);

const newContent = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen
      }</span></li>
    </ul>
`;

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "short-trip-backback");
newArticle.innerHTML = newContent;

const main = document.querySelector(".maincontent");
main.append(newArticle);

// Add new navigation menu to the DOM, using flexbox

const nav =`
      <div class="navigation" style="padding: 10px 0 10px 30px;"><a style="text-decoration: none; font-weight: 600" href="#">Home</a></div>
      <div class="navigation" style="padding: 10px 0 10px 30px;"><a style="text-decoration: none; font-weight: 600" href="#">About</a></div>
      <div class="navigation" style="padding: 10px 0 10px 30px;"><a style="text-decoration: none; font-weight: 600" href="#">Social Media</a></div>
      <div class="navigation" style="padding: 10px 0 10px 30px;"><a style="text-decoration: none; font-weight: 600" href="#">Shop</a></div>
      <div class="navigation" style="padding: 10px 0 10px 30px;"><a style="text-decoration: none; font-weight: 600" href="#">Connect</a></div>
`;

const newNavigation = document.createElement("div");
newNavigation.classList.add("nav-container");
newNavigation.setAttribute("style", "position: fixed; display: flex; flex-direction: column; place-self: flex-start; width: 220px; height; 400px; flex-direction: column; border: 2px solid #ec6322;");
newNavigation.innerHTML = nav;

const headerElement = document.querySelector(".siteheader");
headerElement.prepend(newNavigation);

// Arrays

let backpackContents = ["piggy", "headlamp", "pen"];
console.log(backpackContents.join(" | "));


console.log(backpackContents);

backpackContents.unshift("Tess book", "iPhone 7");
console.log(backpackContents.join(" | "));

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);

// More Arrays

let bookBag = [
  "The Return of the Native", 
  "Far From the Madding Crowd", 
  "Jude the Obscure", 
  "The Mayor of Casterbrigde", 
  "Tess of the D'urbevilles"
];
console.log(bookBag);

let discardedBooks = [];
discardedBooks[0] = bookBag.pop();
console.log("Discarded Books:", discardedBooks, " In my Bookbag:", bookBag);

let inHand = "";
inHand = bookBag.shift();
bookBag.push(inHand);
console.log("In my Bookbag:", bookBag);
console.log("What I have in my hands:", inHand);

bookBag.unshift(bookBag.pop()); // nesting methods inside other methods, this works because in this instance: pop() returns the item we want to unshift()
console.log("Last item is now first:", bookBag);

console.log("The book I randomly selected for today is:", bookBag[Math.floor(Math.random() * bookBag.length)])

bookBag.reverse();
console.log("In my Bookbag:", bookBag);
bookBag.sort();
console.log("In my Bookbag after sorting:", bookBag);

let bookSearch = function() {
  bookBag.forEach(function (bookBagContent, index) {
    if(bookBagContent == whatImLookingFor) {
      console.log(`${whatImLookingFor} was found in this position: ${index}`);
    }
  });
}

var whatImLookingFor = "The Mayor of Casterbrigde";
bookSearch();
var whatImLookingFor = "Jude the Obscure";
bookSearch();

let bookSearchAndDestroy = function() {
  bookBag.forEach(function (bookBagContent, index) {
    if(bookBagContent == whatImLookingFor) {
      bookBag.splice(index, 1);
      console.log('my Bookbag now contains', bookBag);
    }
  });
}

console.log(bookBag);
var whatImLookingFor = "Jude the Obscure";
bookSearchAndDestroy();

// Functions

// Normal functions get hoisted
function a (a) {
  return a + 100;
}

// Arrow functions don't get hoisted
(a) => {
  return a + 100;
}

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenyPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) { // Arrow functions can't be used here for scoping reasons, since they do not have their own bindings to 'this' and therefore should'nt be used as methods.
    console.log("this.volume in the method:", this.volume); // volume: 8
    this.volume = volume;
    console.log("this.volume after update:", this.volume); // new passed volume: 5
    // (function () { // Normal function gets hoisted and returns the window objects value: volume: 20
    //   console.log("this.volume in nested function:", this.volume);
    // })();
    ( () => { // Arrow function works best here, since it doesn't get hoisted: volume: 5 still
      console.log("this.volume in nested function:", this.volume);
    })();
  },
};

console.log(greenyPack.newVolume(5));

// 3 different kinds of functions

//// 1. basic
function changeColor (copySelector, copyColor) {
  document.querySelector(copySelector).style.color = copyColor;
};

changeColor(".site-title", "orange");

//// 2. function expression
const changeColorCopy = function(copySelector, copyColor) {
  document.querySelector(copySelector).style.color = copyColor;
};

changeColorCopy(".site-description", "green");

// arrow functions are anonymous(can't be named) so I wrapped mine in an outer function to be called with params
const outerFunction = function(copySelector, copyColor) {

  //// 3. arrow function -- immediately invoked
  ( () => {
    document.querySelector(copySelector).style.color = copyColor;
  })(copySelector, copyColor);

}

outerFunction(".page-header__heading", "orange");
