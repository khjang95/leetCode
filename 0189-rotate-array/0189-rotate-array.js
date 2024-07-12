/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;

  // k가 배열의 길이보다 클 경우, k를 n으로 나눈 나머지로 변환합니다.
  k = k % n;

  // 전체 배열을 뒤집습니다.
  reverse(nums, 0, n - 1);

  // 처음 k개의 요소를 뒤집습니다.
  reverse(nums, 0, k - 1);

  // 나머지 요소를 뒤집습니다.
  reverse(nums, k, n - 1);
};

function reverse(nums, start, end) {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}