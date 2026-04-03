// bubble sort: comparing current and next indexed value, if next is getter , than i am swapping the values... amd using do while loop to repeat the process until no swaps are needed

// basically do while loop will run at least once and will continue to run as long as the condition is true

let arr = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  {
    return arr;
  }
}

bubbleSort(arr);
console.log("Sorted array:", arr);
