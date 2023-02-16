/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Backpack from "./Backpack.js";
import Candleholder from "./Candleholder.js";
import Mug from "./Mug.js";
import Book from "./Book.js";
import Desk from "./Desk.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const basicCandleHolder = new Candleholder(
  ['glass', 'concrete'],
  10 + " dollars",
  6 + " inches",
  "5 inches",
  "2 Pounds"
);

const coffeeMug = new Mug(
  "A butterfly, flowers, and water",
  true,
  true,
  "porcelain"
);

const beerMug = new Mug(
  "Polka insignia",
  true,
  false,
  "Thick, foggged glass"
);

console.log("The everydayPack object:", everydayPack);
console.log("a basicCandleHolder object:", basicCandleHolder);
console.log("the basicCandleHolder's made of:", basicCandleHolder.madeOf);
console.log("a coffeeMug object:", coffeeMug);
console.log("a beerMug object:", beerMug);


// Exercise 1

// Book: name, author, genre, constructionMaterial, unique, starRating
const book1 = new Book(
  "Anna Karenina",
  "Tolstoy",
  "Fiction, Historic",
  "Paperback",
  "1st edition, New International",
  "* * * * *"
);

const book2 = new Book(
  "Tess of the D'urbervilles",
  "Thomas Hardy",
  "Fiction, Historic",
  "Hardback",
  "Signed, original publisher",
  "* * * * *"
);

const book3 = new Book(
  "Moby Dick",
  "Herman Melville",
  "Fiction, Historic",
  "Hardback",
  "Original beaverskin binding",
  "* * * * *"
);

const book4 = new Book(
  "The Brothers Karamozov",
  "Fyodor Dostoevsky",
  "Fiction, Historic",
  "Paperback",
  "The Modern Library, Classics edition, felt binding",
  "* * * * *"
);

const book5 = new Book(
  "The Grapes of Wrath",
  "John Steinbeck",
  "Fiction, Historic",
  "Paperback",
  "Vintage Classics, 2nd edition",
  "* * * * *"
);

// Exercise 2

console.log("The first book in our catalogue is:", book1);
console.log("The second book in our catalogue is:", book2);
console.log("The third book in our catalogue is:", book3);
console.log("The fourth book in our catalogue is:", book4);
console.log("The fifth book in our catalogue is:", book5);

// New Exercise 1a

const desk1 = new Desk(
  "Wood",
  "Clear Sealant Protection",
  "Light Beachwood",
  "60 inches",
  "80 inches",
  4
);

console.log("My first desk is:", desk1);