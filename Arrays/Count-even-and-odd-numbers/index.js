// Count even and odd numbers

function countArray(arr) {
  let oddCount = 0;
  let eventCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      eventCount += 1;
    } else {
      oddCount += 1;
    }
  }

  return [oddCount, eventCount];
}

console.log(countArray([1, 2, 3, 4, 5]));
