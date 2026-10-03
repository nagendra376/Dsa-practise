function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return [];
}

console.log(twoSum([3, 2, 4], 6));

//brtue force

// function twoSum(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   nums.sort((a, b) => a - b);

//   while (left < right) {
//     const sum = nums[left] + nums[right];
//     if (sum === target) {
//       return [left, right];
//     } else if (sum < target) {
//       left++;
//     } else if (sum > target) {
//       right--;
//     }
//   }

//   return [];
// }

// console.log(twoSum([3, 2, 4], 6));
