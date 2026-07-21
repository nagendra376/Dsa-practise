// push the max to the last by adjacent swapping

let arr = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(arr) {
  // code here
  const n = arr.length;
  let didSwap = 0;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = 1;
      }
    }
    if (didSwap === 0) {
      break;
    }
  }
  return arr;
}

bubbleSort(arr);
console.log("Sorted array:", arr);
