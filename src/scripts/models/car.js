// contains the Car class

class Vehicle {
  constructor() {
    this.type = "car";
  }

  start() {
    return `Starting: ${this.type}`;
  }
}

export class Car extends Vehicle {
  //constructor() {
  //    super();
  //}
  start() {
    return "in Car start " + super.start();
  }
}
