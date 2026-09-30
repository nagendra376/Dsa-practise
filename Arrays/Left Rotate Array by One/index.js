function leftRotate(arr, n, d) {
  d = d % n;
  let temp = new Array(d);
  for (let i = 0; i < d; i++) {
    temp[i] = arr[i];
  }
  for (let i = d; i < n; i++) {
    arr[i - d] = arr[i];
  }
  for (let i = n - d; i < n; i++) {
    arr[i] = temp[i - (n - d)];
  }
}
