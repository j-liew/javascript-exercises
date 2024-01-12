const findTheOldest = function(array) {
    array.sort((a,b) => {
        const ageA = "yearOfDeath" in a ? a.yearOfDeath - a.yearOfBirth : new Date().getFullYear() - a.yearOfBirth
        const ageB = "yearOfDeath" in b ? b.yearOfDeath - b.yearOfBirth : new Date().getFullYear() - b.yearOfBirth
        if (ageA < ageB) {
            return 1;
        }
        else if (ageA == ageB) {
            return 0;
        }
        else {
            return -1;
        }
    })
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
