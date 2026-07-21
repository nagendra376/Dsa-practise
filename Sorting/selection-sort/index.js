// Selection Sort Algorithm -> it means we will select the minimum element from the unsorted array and place it at the beginning of the sorted array.

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i <= n - 2; i++) {
    let mini = i;
    for (let j = i; j <= n - 1; j++) {
      if (arr[j] < arr[mini]) {
        mini = j;
      }
    }

    let temp = arr[mini];
    arr[mini] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

selectionSort([4, 1, 3, 9, 7]);
