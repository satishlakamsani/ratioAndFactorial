const ratioOfTwo = require("../ratio/index");
const factorialOf = require("../factorial/index");
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfTwo(num1, num2);
  const factorial = factorialOf(num3);
  return { ratio, factorial };
};
module.exports = ratioAndFactorial;
