/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var numsLength = nums.length;
    var object = {};

    for (var i = 0; i < numsLength; i++) {
        var num = nums[i];
        
        if (!object[num]) {
            object[num] = 1;
        } else {
            object[num] = object[num] + 1;
        }

        if (object[num] > numsLength / 2) {
            return num;
        }
    }
};