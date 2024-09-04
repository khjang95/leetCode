/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sArray = s.split('').sort();
    var tArray = t.split('').sort();

    if (sArray.toString() !== tArray.toString()) {
        return false;
    }

    return true;
};