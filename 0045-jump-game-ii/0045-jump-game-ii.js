/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let len = nums.length - 1; 
    let curr = -1; 
    let next = 0
    
    let result = 0;

    for (let i = 0; next < len; i++) {
        if (i > curr) {
            result++
            curr = next;
        }

        next = Math.max(next, nums[i] + i);
    }

    return result;
};