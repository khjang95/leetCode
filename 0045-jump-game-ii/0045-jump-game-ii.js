/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) {
        return 0;
    }

    let jumps = 0;
    let currentEnd = 0;
    let maxJump = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxJump = Math.max(maxJump, i + nums[i]);

        if (i == currentEnd) {
            jumps++;
            currentEnd = maxJump;

            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }

    return jumps;
};