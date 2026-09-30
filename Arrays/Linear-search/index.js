function search(arr, x) {
  // code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }

  return -1;
}

search([1, 2, 3, 4], 3);
