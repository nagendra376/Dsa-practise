// In insertion sort , the array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.

// it checks by iterating.. if the current index value is greater than than next element then it swaps the values.

const arr = [2, 3, 6, 4, 1];
const n = arr.length;

function sort(arr) {
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j;

    for (j = i - 1; arr[j] > key && j >= 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  console.log(arr);
  return arr;
}

sort(arr);
