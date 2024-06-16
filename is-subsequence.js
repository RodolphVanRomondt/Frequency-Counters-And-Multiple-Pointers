// function createFrequencyCounter(str) {
//     let frequencies = {};
//     let occ = 0;

//     for (let char of str) {
//         if (frequencies[char] === undefined) {
//             frequencies[char] = occ;
//             occ++;
//         }
//     }

//     return frequencies;
// }

// function isSubsequence(str1, str2) {

//     let boolCompare = 0;
//     let str2Obj = createFrequencyCounter(str2);

//     for (let char of str1) {
//         if (str2Obj[char] >= boolCompare) {
//             boolCompare = str2Obj[char];
//         }
//         else {
//             return false;
//         }
//     }
//     return true;
// }

function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    if (!str1) return true;
    while (str2Idx < str2.length) {
        if (str2[str2Idx] === str1[str1Idx]) {
            str1Idx += 1;
        }
        if (str1Idx === str1.length) return true;
        str2Idx += 1;
    }
    return false;
}


module.exports = isSubsequence;