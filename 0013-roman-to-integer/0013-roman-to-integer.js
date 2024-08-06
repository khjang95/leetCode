/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbol = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let index = 0;    
    let result = 0;

    while (index < s.length) {
        if (index === s.length - 1) {
            return result + symbol[s[index]];
        } 
        
        const sum = symbol[s[index + 1]] - symbol[s[index]];

        if (sum > 0) {
            result += sum;
            index += 2;
        } else {
            result += symbol[s[index]];
            index += 1;
        }
        
        console.log(index)
        // 4, 9, 40, 90, 400, 900
    }

    return result;
};