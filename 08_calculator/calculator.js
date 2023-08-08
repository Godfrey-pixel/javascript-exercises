const add = function (...num) {
  if (num.length === 0) {
    return 0; // If no numbers are provided, the result is 0
  }

  let result = 1;
  for (const number of num) {
    if (Array.isArray(number)) {
      // If the current parameter is an array, flatten it and add its elements
      for (const element of number) {
        result += element;
      }
    } else {
      // If the current parameter is a number, add it directly
      result += number;
    }
  }

  return result;
};

const subtract = function (...num) {
  if (num.length === 0) {
    return 0; // If no numbers are provided, the result is 0
  }

  let result = 1;
  for (const number of num) {
    if (Array.isArray(number)) {
      // If the current parameter is an array, flatten it and subtract its elements
      for (const element of number) {
        result -= element;
      }
    } else {
      // If the current parameter is a number, subtract it directly
      result -= number;
    }
  }

  return result;
};

const sum = function (...num) {
  if (num.length === 0) {
    return 0; // If no numbers are provided, the result is 0
  }

  let result = 1;
  for (const number of num) {
    result += number;
  }

  return result;
};

const multiply = function (...num) {
  if (num.length === 0) {
    return 0; // If no numbers are provided, the result is 0
  }

  let result = 1;
  for (const number of num) {
    if (Array.isArray(number)) {
      // If the current parameter is an array, flatten it and multiply its elements
      for (const element of number) {
        result *= element;
      }
    } else {
      // If the current parameter is a number, multiply it directly
      result *= number;
    }
  }

  return result;
};

const power = function (...num) {
  if (num.length === 0) {
    return 0; // If no numbers are provided, the result is 0
  }

  let result = 1;
  for (const number of num) {
    if (Array.isArray(number)) {
      // If the current parameter is an array, flatten it and power its elements
      for (const element of number) {
        result **= element;
      }
    } else {
      // If the current parameter is a number, power it directly
      result **= number;
    }
  }

  return result;
};

const factorial = function (num1) {
  if (num1 === 0 || num1 === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= num1; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
