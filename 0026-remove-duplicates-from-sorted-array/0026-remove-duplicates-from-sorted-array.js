/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let duplicate = -101;
    let left = 0;

    for (let right = 0; right < nums.length; right ++) {
        if (nums[right] !== duplicate) {
            nums[left] = nums[right];
            duplicate = nums[right];

            left ++;
        }
    }

    return left;
};