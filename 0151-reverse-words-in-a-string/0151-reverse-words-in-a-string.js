/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const splitString = s.split(' ');
    let result = ''

    for (let i = splitString.length - 1; i >= 0; i--) {
        if (splitString[i] === '') {
            continue;
        }

        console.log(splitString[i])

        result += ' ' + splitString[i];
    }
    
    
    return result.trim();
};