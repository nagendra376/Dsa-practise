function test(nums) {
  let j = -1;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return nums;

  for (i = j + 1; i < n; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }

  return nums;
}

console.log(test([0, 1, 0, 3, 12]));
