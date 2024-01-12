const getTheTitles = function(arrayOfObjects) {
    // using forEach Loop
    // arrayOfTitles = []
    // arrayOfObjects.forEach((obj) => arrayOfTitles.push(obj.title))
    // return arrayOfTitles;

    return arrayOfObjects.map((obj) => obj.title);
};

// Do not edit below this line
module.exports = getTheTitles;
