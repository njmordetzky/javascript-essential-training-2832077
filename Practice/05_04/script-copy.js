/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */

import Backpack from "./Backpack.js";

// document.querySelectorAll("#pack02 .feature.backpack__color").forEach(item => item.style.color = "green");

// var querySelectorAllResults = document.querySelectorAll("#pack02 .feature.backpack__color");
// console.log(querySelectorAllResults);
// querySelectorAllResults.forEach(item => item.style.color = "green");

// document.querySelector("#pack02 .feature.backpack__color").style.color = "green";

// var querySelectorResults = document.querySelector("#pack02 .feature.backpack__color");
// console.log("Your Query's Results: ", querySelectorResults);
// querySelectorResults.style.color = "green";

// var newCopy = document.createElement('li');
// newCopy.innerHTML = `Popularity: in vogue`;
// newCopy.className = 'injectedClass';
// newCopy.setAttribute("style", "padding: 0.4rem 0 0");
// document.querySelector("#pack02 .feature.backpack__color").appendChild(newCopy);

// var newCopy2 = document.createElement('li');
// newCopy2.innerHTML = `Popularity: worn out`;
// newCopy2.className = 'injectedClass';
// newCopy2.setAttribute("style", "padding: 0.4rem 0 0");
// document.querySelector("#pack01 .feature.backpack__color").appendChild(newCopy2);

// document.querySelectorAll('li').forEach(item => item.innerHTML = "I changed you all!")

//document.querySelector("h1").className = "fake-class"

// var classNameHolder = document.querySelector("article h1").classList.replace("backpack__name", "i-changed-the-class");

// // Add 2 new classes to an element
// document.querySelector(".page-header__heading").classList.add("class-2", "class-3");

// // Remove an element's class
// document.querySelector(".page-header__heading").classList.remove("class-2")

// // Add inline styles to an element
// document.querySelector(".page-header__heading").setAttribute("style", "text-decoration: underline");

// // Add an attribute to an element
// document.querySelector(".page-header__heading").setAttribute("vital", "yes");

// // Target an element and change the value of an attribute
// document.querySelector(".page-header__heading").style.textDecoration = "underline";

// // Request the value of an attribute
// console.log(document.querySelector(".backpack__name").getAttribute("class"))

// // Change the value of an attribute
// document.querySelector("form.leftlength").setAttribute("data-children-count", "32");
// console.log(document.querySelector("form.leftlength").getAttribute("data-children-count"));

// // Add inline CSS to an element
// document.querySelector(".backpack__name").style.backgroundColor = "red";
// document.querySelector(".backpack__name").style.borderBottom = "60px solid #ff5500";


// Add new DOM element
const quickPack = new Backpack(
  "Short Trip Backpack",
  22,
  "white",
  15,
  30,
  30,
  false,
  "December 5, 2018 15:00:00 PST",
  "https://i.etsystatic.com/17857814/r/il/e5cda0/1659319694/il_570xN.1659319694_d9ue.jpg"
);

// Template Literal
const newContent = `
    <figure class="backpack__image">
      <img src=${quickPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${quickPack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        quickPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        quickPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${quickPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        quickPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        quickPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        quickPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        quickPack.lidOpen
      }</span></li>
    </ul>
`;

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "short-trip-backback");
newArticle.innerHTML = newContent;

const main = document.querySelector(".maincontent");
main.append(newArticle);