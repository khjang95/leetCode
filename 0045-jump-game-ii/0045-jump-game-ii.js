/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

    let previousMaxJump = 0;
    let maxJump = 0;
    let jump = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxJump = Math.max(maxJump, i + nums[i]);

        if (i === previousMaxJump) {
            previousMaxJump = maxJump;
            jump++;
        }
    }

    return jump;
};