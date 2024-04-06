const assert = require("assert");
const ganache = require("ganache");
// constructor for web3
const { Web3 } = require("web3");
// instance of web3
// try to connect to the local ganache network
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

let car;
beforeEach(() => {
  car = new Car();
});
describe("Car", () => {
  it("can park", () => {
    assert.equal(car.park(), "stopped");
  });

  it("can drive", () => {
    assert.equal(car.drive(), "vroom");
  });
});
