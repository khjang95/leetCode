/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majority = nums.length / 2;
    var object = {};

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];

        if (!object[num]) {
            object[num] = 1;
        } else {
            object[num] = object[num] + 1;
        }

        if (object[num] > majority) {
            return num;
        }
    }
};