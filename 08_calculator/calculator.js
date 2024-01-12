const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, element) => accumulator + element, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, elem) => acc * elem, 1)
}

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  // let result = 1
	// for (let i = 1; i <= n; i++) {
  //   result *= i;
  // }
  // return result;

  // recursive
  if (n == 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1);
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
