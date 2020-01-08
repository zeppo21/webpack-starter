import "../styles/index.scss";

import { Car } from "./models/car";
import { sayGoodnightDick } from "./goodnight.js";
import { test_jquery_get } from "./jq";
import { test_jquery_post } from "./jq";

console.log("Hello World!!!");

let car = new Car();
console.log(car.start());

sayGoodnightDick();

// DOM Pluralsight module
console.log(window.innerWidth);

// Timers and stuff..
/*
let timeoutId = setTimeout(function() {
  console.log("1 second passed");
}, 1000);
console.log(timeoutId);

let intervalId = setInterval(function() {
  console.log("1 second passed");
}, 1000);
clearInterval(intervalId);
*/

console.log(location.href);
console.log(window.location.href);
console.log(document.location.href);

let el = document.getElementById("first");
//console.log(el);

let els = document.getElementsByClassName("p1");
//console.log(els);

let tags = document.getElementsByTagName("p");
//console.log(tags);

// Modify DOM Elements
let mod_el = document.getElementById("first");
mod_el.textContent = "A new content...";

// ERRORS`

try {
  let car = newCar;
} catch (error) {
  console.log("error", error);
} finally {
  console.log("finally block always executes!");
}
console.log("continuing...");

try {
  console.log("entering try");
  throw new Error("my custom error");
} catch (error) {
  console.log("error: ", error);
} finally {
  console.log("in finally");
}

// JQUERY
test_jquery_get();
test_jquery_post();
