// brute force approach
// var maxArea = function (height) {
//   let maxWater = 0;
//   const n = height.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       let width = j - i;
//       let heightt = Math.min(height[i], height[j]);

//       console.log(width, heightt);

//       let current = width * heightt;

//       maxWater = Math.max(maxWater, current);
//     }
//   }
//   return maxWater;
// };

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// using 2 pointers time - O(n)
var maxArea = function (height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length -1;

  while (left < right) {
    let width = right - left;
    let ht = Math.min(height[left], height[right]);
    let container = width * ht;

    maxWater = Math.max(container, maxWater);

    height[left] < height[right] ? left++ : right--;
  }

  return maxWater;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
