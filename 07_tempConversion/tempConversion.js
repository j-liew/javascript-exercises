const convertToCelsius = function(fahrenheit) {
  // using toFixed
  // return +((fahrenheit - 32) * (5 / 9)).toFixed(1);
  // using Math.round()
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};



const convertToFahrenheit = function(celsius) {
  // using toFixed
  // toFixed returns a string, so must convert back to a number
  // return +(celsius * (9/5) + 32).toFixed(1);
  // using Math.round()
  return Math.round((celsius * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
