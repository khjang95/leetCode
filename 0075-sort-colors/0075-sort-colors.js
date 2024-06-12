/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let zeroCnt = 0, oneCnt = 0, twoCnt = 0;

    // Count occurrences
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            zeroCnt++;
        } else if (nums[i] == 1) {
            oneCnt++;
        } else {
            twoCnt++;
        }
    }

    let arrayIterator = 0;

    // Place all 0s
    for (let i = 0; i < zeroCnt; i++) {
        nums[arrayIterator] = 0;
        arrayIterator++;
    }

    // Place all 1s
    for (let i = 0; i < oneCnt; i++) {
        nums[arrayIterator] = 1;
        arrayIterator++;
    }

    // Place all 2s
    for (let i = 0; i < twoCnt; i++) {
        nums[arrayIterator] = 2;
        arrayIterator++;
    }
};