const fibonacci = function(n) {
    // // recursive
    // if (n < 0) {
    //     return "OOPS"
    // }
    // if (n == 0) {
    //     return 0;
    // }
    // else if (n == 1) {
    //     return 1;
    // }
    // else {
    //     return fibonacci(n - 1) + fibonacci(n - 2);
    // }

    // iterative
    if (n < 0) {
        return "OOPS"
    }
    if (n == 0) {
        return 0;
    }

    prev = 0
    current = 1
    let temp;
    for (let i = 1; i < n; i++) {
        temp = current;
        current = prev + current;
        prev = temp;
    }
    return current
};

// Do not edit below this line
module.exports = fibonacci;
