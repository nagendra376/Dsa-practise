function LeftRotateArrayByOne(arr) {
  let n = arr.length;
  let temp = arr[0];
  for (let i = 1; i < n; i++) {
    arr[i - 1] = arr[i];
  }
  arr[n - 1] = temp;
  return arr;
}

console.log(LeftRotateArrayByOne([1, 2, 3, 4, 5]));
