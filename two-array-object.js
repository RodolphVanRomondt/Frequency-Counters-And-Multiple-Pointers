// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    const toReturn = {};

    for (let i = 0; i < arr1.length; i++) {
        toReturn[arr1[i]] = arr2[i] || null;
    }

    return toReturn;
}


module.exports = twoArrayObject;