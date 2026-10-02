// https://leetcode.com/problems/maximum-subarray/

// using greedy(kadane's pattern)

var maxSubArray = function(nums) {
  let maxSum = nums[0];
  let currentSum = 0;
  
  for(num of nums){
    if(currentSum<0){
        currentSum = 0;
    }

    currentSum += num;
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
};

console.log(maxSubArray([5,4,-1,7,8]));

//using dp


