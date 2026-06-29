// reverse an array

function f(i, arr, n) {
  if (i <= n / 2) return;
  [arr[i], arr[n - i - 1]] = [arr[n - i - 1], arr[i]];
}

function reverse(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    f(i, arr, n);
  }
  return arr;
}

console.log(reverse([0, 1, 2, 3, 4]));
