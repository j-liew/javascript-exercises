const sumAll = function(start, end) {
    // error checking
    if (start < 0 || end < 0 || typeof start != 'number' || typeof end != 'number') {
        return "ERROR";
    }

    // swap if larger number given as start
    if (end < start) {
        temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
