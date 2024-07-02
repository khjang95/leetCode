/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const hLength = haystack.length;
    const nLength = needle.length;

    for (let i = 0; i <= hLength - nLength; i++) {
        let j = 0;
        
        while (j < nLength && haystack[i + j] === needle[j]) {
            j++;
        }
        
        if (j === nLength) {
            return i;
        }
    }

    return -1;
};