/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

const imageFormatter = (passedObj) => {
  let newImage = document.createElement("img");
  newImage.setAttribute("src", passedObj.image)
  newImage.setAttribute("alt", passedObj.name)
  newImage.setAttribute("width", 200);
  return newImage;
};

const basicModule = (passedObj) => {
  // textual content
  let modContainer = document.createElement("div");
  modContainer.setAttribute("style", "width:400px; margin:0 auto; text-align: center; padding: 40px;");
  console.log(modContainer);
  modContainer.innerHTML = content;
  // images
  modContainer.prepend(imageFormatter(passedObj));
  let frogImage = imageFormatter(passedObj);
  modContainer.append(frogImage);
  // modContainer.append(frogImage); //only works once
  modContainer.append(imageFormatter(passedObj)); //creates mulitple instances
  modContainer.append(imageFormatter(passedObj));
  return modContainer;
};

document.querySelector("main").append(basicModule(frogpack));








/**
 * Loops Aplenty!
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Callback_function
 */

 const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

 const nestedObjects = {
   item01: {
     name: "piggy",
     type: "toy",
     weight: 30,
   },
   item02: {
     name: "headlamp",
     type: "equipment",
     weight: 120,
   },
   item03: {
     name: "pen",
     type: "tool",
     weight: 30,
   },
   item04: {
     name: "pencil",
     type: "tool",
     weight: 30,
   },
   item05: {
     name: "eraser",
     type: "tool",
     weight: 40,
   },
   item03: {
     name: "water bottle",
     type: "equipment",
     weight: 1300,
   },
 };
 
 const article = document.querySelector("article");
 let stuffList = document.createElement("ul");
 
 
 /**
  * for loop
  * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
  */
 for (let i = 0; i < stuff.length; i++) {
   let listItem = document.createElement("li");
   listItem.innerHTML = stuff[i];
   stuffList.append(listItem);
 }
 
 /**
  * for...of loop and arrays
  * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  */
 for (const item of stuff) {
   let listItem = document.createElement("li");
   listItem.innerHTML = item;
   stuffList.append(listItem);
 }
 
 /**
  * foreach array method
  * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  */
 stuff.forEach((item) => {
   let listItem = document.createElement("li");
   listItem.innerHTML = item;
   stuffList.append(listItem);
 });
 
 /**
  * for...in loop and objects
  * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
  */
 for (const singleObject in nestedObjects) {
   let listItem = document.createElement("li");
   listItem.innerHTML = `Name: ${nestedObjects[singleObject].name} <br/> 
                         type: ${nestedObjects[singleObject].type} <br/>
                         weight: ${nestedObjects[singleObject].weight} <br/>
                         --------`;
   stuffList.append(listItem);
 }
 
 
 article.append(stuffList);