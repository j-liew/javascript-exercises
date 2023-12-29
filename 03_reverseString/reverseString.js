const reverseString = function(word) {
    // output = "";
    // for(let i = word.length - 1; i >= 0; i--) {
    //     output += word[i];
    // }
    // return output;
    return word.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
