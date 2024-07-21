/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    if (nums.length < 2) {
        return 0;
    }

    let previousMaxJump = 0;
    let maxJump = 0;
    let jump = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        maxJump = Math.max(maxJump, i + nums[i]);

        if (previousMaxJump < maxJump && i === previousMaxJump) {
            previousMaxJump = maxJump;
            jump++;

            if (maxJump >= nums.length - 1) {
                break;
            }
        }
    }

    return jump;
};