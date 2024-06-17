/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let i = 0;
    let j = Math.ceil(Math.sqrt(c)); // 루트 값 반올림

    while (i <= j) {
        let sum = i * i + j * j;

        if (sum === c) {
            return true;
        }

        if (sum < c) {
            i++;
        } else if (sum > c) {
            j--;
        }
    }

    return false;
};