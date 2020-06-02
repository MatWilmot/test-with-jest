const { add } = require("../util/util");

// jest function
describe("Add", function () {
  describe("Success", function () {
    it("Should return the sum of the two given arguments", function () {
      expect(add(2, 2)).toBe(4);
    });
  });
});
