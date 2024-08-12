/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var numsLength = nums.length;
    var majority = numsLength / 2;
    var object = {};

    for (var i = 0; i < numsLength; i++) {
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