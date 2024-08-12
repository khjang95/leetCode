/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var object = {};

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        
        if (!object[num]) {
            object[num] = 1;
        } else {
            object[num] = object[num] + 1;
        }

        if (object[num] > nums.length / 2) {
            return num;
        }
    }
};