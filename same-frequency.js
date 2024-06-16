function freqCounter(str) {
    const toReturn = {};

    for (let char of str) {
        toReturn[char] = (toReturn[char] + 1) || 1;
    }

    return toReturn;
}


function sameFrequency(num1, num2) {

    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    const num1Obj = freqCounter(str1);
    const num2Obj = freqCounter(str2);

    for (let el in num1Obj) {
        if (num1Obj[el] !== num2Obj[el]) return false;
    }
    return true;
}


module.exports = sameFrequency;