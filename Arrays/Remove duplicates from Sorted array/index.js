// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// checking the current element to the next element, if they are not equal then putting jth index element to ith place so the from start the unique element will be there

// Input: nums = [1,1,2]
// Output: 2,

// o(n) time complexity and o(1) space complexity

var removeDuplicates = function (nums) {
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }

  return i + 1;
};
