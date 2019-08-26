const expect = require("chai").expect;
const caseMaker = require("../caseMaker");

describe("Case Maker", () => {
  //...
  it("is a function", () => {
    expect(caseMaker).to.be.a("function");
  });

  it("returns a string", () => {
    expect(caseMaker("")).to.be.a("string");
  });

  it("returns a single word unchanged", () => {
    expect(caseMaker("test")).to.equal("test");
  });

  it("returns a lowercased version of the single word", () => {
    expect(caseMaker("Test")).to.equal("test");
  });

  it("camel cases multiple words", () => {
    expect(caseMaker("this is a string")).to.equal("thisIsAString");
  });

  it("works with a complicated example", () => {
    expect(caseMaker("tHIS iS tHE sONG tHAT nEVER eNDS")).to.equal(
      "thisIsTheSongThatNeverEnds"
    );
  });
});
