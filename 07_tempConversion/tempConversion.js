const convertToCelsius = function (temperaturInFahrenheit) {
  return Math.round((temperaturInFahrenheit - 32) * (5 / 9) * 10) / 10;
};

const convertToFahrenheit = function (temperaturInCelsius) {
  return Math.round((temperaturInCelsius * (9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
