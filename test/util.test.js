const { add, minus } = require("../util/util");

// jest function
describe("Add", () => {
  describe("Success", () => {
    it("Should return the sum of the two given arguments", () => {
      expect(add(2, 2)).toBe(4);
    });
  });
  describe("Failure", () => {
    it("Should throw an error if first argument isn't a number", () => {
      expect(() => {
        add("2", 2);
      }).toThrowError();
    });

    it("Should throw an error if second argument isn't a number", () => {
      expect(() => {
        add(2, "2");
      }).toThrowError();
    });
    it("Should throw an error if no argument is passed", () => {
      expect(() => {
        minus();
      }).toThrowError();
    });
  });
});

describe("Minus", () => {
  describe("Success", () => {
    it("Should return the value of the first number minus the second number", () => {
      expect(() => {
        minus(4, 2).toBe(2);
      });
    });
  });

  describe("Failure", () => {
    it("Should throw an error if first argument isn't a number", () => {
      expect(() => {
        minus("4", 2);
      }).toThrowError();
    });

    it("Should throw an error if second argument isn't a number", () => {
      expect(() => {
        minus(4, "2");
      }).toThrowError();
    });

    it("Should throw an error if no argument is passed", () => {
      expect(() => {
        minus();
      }).toThrowError();
    });
  });
});
