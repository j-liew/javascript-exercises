const removeFromArray = function(arr, ...elementsToRemove) {
    // my original solution, way less efficient

    // for (elem of elementsToRemove) {
    //     for (let i = 0; i < arr.length; i++){
    //         if (arr[i] === elem) {
    //             arr.splice(i, 1);
    //         }
    //     }
    // }

    // const outputArray = []
    // arr.forEach((elem) => {
    //     if (!elementsToRemove.includes(elem)) {
    //         outputArray.push(elem);
    //     }
    // })

    // return outputArray;

    // simpler solution
    return arr.filter((x) => {
        return !elementsToRemove.includes(x);
    })

}


// Do not edit below this line
module.exports = removeFromArray;
