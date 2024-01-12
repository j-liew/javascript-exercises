// const palindromes = function (s) {
//     // convert to lowercase string
//     s = s.toLowerCase()

//     // strip whitespace
//     s = s.split('').join('');

//     // remove non alpha-numeric characters
//     newS = ""
//     for (let i = 0; i < s.length; i++) {
//         const code = s.charCodeAt(i);
//         if ((code > 47 && code < 58) || (code > 96 && code < 123)) {
//             newS += s[i];
//         }
//     }
//     s = newS;
    
//     // recursive solution
//     // if (s.length == 1 || s.length == 0) {
//     //     return true;
//     // }
//     // else if (s[0] == s[s.length - 1]){
//     //     return palindromes(s.slice(1, s.length-1))
//     // }
//     // else {
//     //     return false;
//     // }

//     // iterative solution
//     for (let i = 0; i < Math.ceil(s.length/2); i++) {
//         if (s[i] != s[s.length - i - 1]) {
//             return false
//         }
//     }
//     return true
// };

// solution leveraging built in functions
const palindromes = function (s) {
    const processedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return processedString.split("").reverse().join("") == processedString;
}


// Do not edit below this line
module.exports = palindromes;
