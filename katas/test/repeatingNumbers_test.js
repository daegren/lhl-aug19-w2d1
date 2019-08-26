const expect = require("chai").expect;
const repeatingNumbers = require("../repeatingNumbers");

describe("repeating numbers", () => {
  //...
  it("is a function", () => {
    expect(repeatingNumbers).is.a("function");
  });

  it("returns a string", () => {
    expect(repeatingNumbers([])).to.be.a("string");
  });

  it("returns the first number repeated the second number of times", () => {
    expect(repeatingNumbers([[1, 10]])).to.equal("1111111111");
  });

  it("joins multiple inputs together with a comma", () => {
    expect(repeatingNumbers([[1, 2], [2, 3]])).to.equal("11, 222");
  });

  it("repeats number greater than 9 properly", () => {
    expect(repeatingNumbers([[10, 4], [34, 6], [92, 2]])).to.equal(
      "10101010, 343434343434, 9292"
    );
  });
});
