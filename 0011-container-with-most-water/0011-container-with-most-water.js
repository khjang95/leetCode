/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;

    let result = 0;

    while (left < right) {
        let area = 0;

        if (height[left] < height[right]) {
            area = height[left] * (right - left);
            left ++;
        } else {
            area = height[right] * (right - left);
            right --;
        }

        if (result < area) {
            result = area;
        }
    }

    return result;
};