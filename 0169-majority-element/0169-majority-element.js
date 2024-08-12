/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var majority = nums.length / 2;
    var object = {};

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var target = object[num] ? object[num] + 1 : 1;

        if (target > majority) {
            return num;
        }

        object[num] = target;
    }
};