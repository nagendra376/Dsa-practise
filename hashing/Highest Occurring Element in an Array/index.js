// Input: nums = [4, 4, 5, 5, 6]

// Output: 4

// Explanation: Both 4 and 5 appear twice, but 4 is smaller. So, 4 is the most frequent element.

class Solution {
  mostFrequentElement(nums) {
    let map = new Map();
    let maxFreq = 0;
    let maxFreqNum = null;

    for (let i = 0; i < nums.length; i++) {
      let currentElement = nums[i];
      let currentCount = 0;

      if (map.has(currentElement)) {
        currentCount = map.get(currentElement);
      }

      let newCount = currentCount + 1;

      map.set(currentElement, newCount);

      if (newCount > maxFreq) {
        maxFreq = newCount;
        maxFreqNum = currentElement;
      }
    }

    return maxFreqNum;
  }
}
