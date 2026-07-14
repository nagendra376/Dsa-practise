function getSecondOrderElements(n, a) {
  // Write your code here.
  const secondLargestElement = secondLargest(n, a);
  const secondSmallestElement = secondSmallest(n, a);

  return [secondLargestElement, secondSmallestElement];
}

function secondLargest(n, arr) {
  let largest = arr[0];
  let secondL = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      secondL = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondL) {
      secondL = arr[i];
    }
  }

  return secondL;
}

function secondSmallest(n, arr) {
  let smallest = arr[0];
  let secondS = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (arr[i] < smallest) {
      secondS = smallest;
      smallest = arr[i];
    } else if (arr[i] != smallest && arr[i] < secondS) {
      secondS = arr[i];
    }
  }

  return secondS;
}

console.log(getSecondOrderElements(5, [1, 20, 3, 40, 5]));
