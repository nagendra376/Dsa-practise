// https://www.geeksforgeeks.org/problems/count-digits5716/1

/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
  // Function to check whether the number evenly divides n.
  evenlyDivides(n) {
    let count = 0;
    let originalNum = n;

    while (n > 0) {
      let lastDigit = n % 10;

      if (lastDigit !== 0 && originalNum % lastDigit === 0) {
        count++;
      }
      n = Math.floor(n / 10);
    }
    return count;
  }
}
