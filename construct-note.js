function createFrequencyCounter(str) {
    let frequencies = {};

    for (let char of str) {
        let valCount = frequencies[char] || 0;
        frequencies[char] = valCount + 1;
    }

    return frequencies;
}

function constructNote(msg, lets) {

    if (!lets.length) return false;

    const msgObj = createFrequencyCounter(msg);
    const letsObj = createFrequencyCounter(lets);

    for (let key in msgObj) {
        if (letsObj[key] < msgObj[key]) return false;
    }
    return true;
}


module.exports = createFrequencyCounter;