// using 2 pointers - time - O(n2) space - O(1)

function threeSum(nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    const sum = nums[i] + nums[left] + nums[right];

    if (nums[i] > 0) break;

    if (nums[i] === nums[i - 1]) continue;

    while (left < right) {
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;

        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}

console.log(threeSum([0,0,0]));
