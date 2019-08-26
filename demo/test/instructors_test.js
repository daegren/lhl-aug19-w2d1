const expect = require("chai").expect;
const instructors = require("../instructors");

describe("instructors", () => {
  context("add", () => {
    it("adds two and two and returns 4", () => {
      // Arrange
      const a = 2;
      const b = 2;

      // Act
      const result = instructors.add(a, b);

      // Assert
      expect(result).to.equal(4);
    });

    it("return 0 if one number is the negative version of the other", () => {
      const a = 10;
      expect(instructors.add(a, -10)).to.equal(0);
    });
  });

  context("instructors array", () => {
    it("is an array", () => {
      expect(instructors.instructors).to.be.an("array");
      expect(instructors.instructors).to.have.lengthOf(3);
    });

    it("contains the right values", () => {
      expect(instructors.instructors[0]).to.have.property("name", "Dave");
    });
  });
});
