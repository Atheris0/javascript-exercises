const add = function (a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((x, y) => x + y, 0);
};

const multiply = function(arr) {
  return arr.reduce((x, y) => x * y);
};

const power = function(a, b) {
  let pow = a;
	for (let i = 1; i < b; i++){
    console.log(pow);
    pow *= a;
  }
	return pow;
};

const factorial = function(n) {
  
  return n < 2 ? 1 : n * factorial(n - 1);

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
