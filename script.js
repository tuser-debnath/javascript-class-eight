// Function Calling Inside Other Function

//Example One
const calculateAge = function (birthYear) {
  return 2022 - birthYear;
};
const jobLeft = function (birthYear) {
  const age = calculateAge(birthYear);
  return 62 - age;
};

const aAge = calculateAge(1978);
console.log(aAge);

const aJobLeft = jobLeft(1978);
console.log(aJobLeft);

// JavaScript Events
function displayText() {
  console.log("This Is Console Text!");
}

function displayAlert() {
  alert("This Is Alert Text!");
}

// JavaScript Strings

// Example One
const text = "I Love Bangladesh!";
console.log(text);

// Example Two
const text2 = 'I Love "Bangladesh!"';
console.log(text2);

// Example Three
const text3 = "I Love 'Bangladesh!'";
console.log(text3);

// Example Four
const text4 = 'I Love "Bangladesh!"';
console.log(text4);

// Example Four
const text5 = "I Love \\ Bangladesh!";
console.log(text5);

// String Methods
const fullName = "Tuser Debnath";
console.log(fullName);
console.log(fullName.length);

// String Slice
const fruits = "Orange, Lemon, Mango";
// console.log(fruits);

const fruit1 = fruits.slice(0, 6);
console.log(fruit1);

const fruit2 = fruits.slice(8, 13);
console.log(fruit2);

const fruit3 = fruits.slice(15, 20);
console.log(fruit3);

// Negative Slice
const fruit4 = fruits.slice(-5);
console.log(fruit4);

const fruit5 = fruits.slice(-12, -7);
console.log(fruit5);

const fruit6 = fruits.slice(-20, -14);
console.log(fruit6);

// Substring

const textSub = "Hello world!";
console.log(textSub.substring(0, 5));

const textSub2 = "Hello world!";
console.log(textSub2.substr(0, 5));

// String Replace
const myText = "I Love Khulna";
const myText2 = myText.replace("Khulna", "Jashore");
console.log(myText);
console.log(myText2);

// String toUpperCase
const upperText = "Hello World!";
console.log(upperText);
console.log(upperText.toUpperCase());

// String toUpperCase
const lowerText = "Hello World!";
console.log(lowerText);
console.log(lowerText.toLowerCase());

// String Trim
const trimText = "     Hello World!";
console.log(trimText.trim());

// String Search
const demoText = "Ritom Kabbo Pritom Ritom";
console.log(demoText.indexOf("Pritom"));
console.log(demoText.lastIndexOf("Ritom"));
console.log(demoText.search("Kabbo"));
