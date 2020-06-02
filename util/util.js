const add = function (num1, num2) {
  if (typeof num1 != "number") {
    throw new Error("First argument must be a number");
  }
  if (typeof num2 != "number") {
    throw new Error("Second argument must be a number");
  }
  return num1 + num2;
};

const minus = function (num1, num2) {
  if (typeof num1 != "number") {
    throw new Error("First argument must be a number");
  }
  if (typeof num2 != "number") {
    throw new Error("Second argument must be a number");
  }
  return num1 - num2;
};

module.exports = { add, minus };
