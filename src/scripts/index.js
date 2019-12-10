import "../styles/index.scss";

import { Car } from "./models/car.js";
import { sayGoodnightDick } from "./goodnight.js";

console.log("Hello World!!!");

let car = new Car();
console.log(car.start());

sayGoodnightDick();
