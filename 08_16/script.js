/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

//  import Backpack from "./components/Backpack.js";
 import backpackObjectArray from "./components/data.js";


const main = document.querySelector(".maincontent");

backpackObjectArray.forEach((nestedObject) => {

  let newArticle = document.createElement("article");
  newArticle.setAttribute("id", nestedObject.id);

  newArticle.innerHTML = `
    <h1 class="backpack__name">${nestedObject.name}</h1>
    <figure class="backpack__image" style="padding: 40px 0;">
      <img src=${nestedObject.image} alt="" />
    </figure>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        nestedObject.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        nestedObject.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${nestedObject.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        nestedObject.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        nestedObject.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        nestedObject.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        nestedObject.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

  main.append(newArticle);
});
