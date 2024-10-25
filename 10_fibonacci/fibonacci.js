const fibonacci = function(n) {
    n = Number(n);
    return n < 0 ? "OOPS" : n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
