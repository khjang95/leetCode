/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    var object = {};

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];

        if (object[num] !== undefined && Math.abs(object[num] - i) <= k) {
            return true;
        } else {
            object[num] = i;
        }
    }

    return false;
};