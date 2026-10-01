// https://leetcode.com/problems/product-of-array-except-self/description/

//with extra space(O(n))
function productExceptSelf(nums) {
  let n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  let result = new Array(n);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  console.log(prefix);
  console.log(suffix);

  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  result = result.map((x) => x + 0);

  return result;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));

//without extra space(O(n))
function productExceptSelf(nums) {
  let n = nums.length;
  let result = new Array(n);

  result[0] = 1;

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }


  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = result[i] * suffix;
    suffix = suffix * nums[i];
  }

  result = result.map((x) => x + 0);

  return result;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
