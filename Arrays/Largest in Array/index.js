// O(n) time complexity

class Solution {
  /**
    * @param number[] arr

    * @returns number
    */
  largest(arr) {
    // code here
    let largest = arr[0];
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
}
