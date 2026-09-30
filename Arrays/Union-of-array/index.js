// time & space complexity : O(n+m) & O(n+m)

//using set
function union(arr1, arr2) {
  const res = new Set();

  for (let i = 0; i < arr1.length; i++) {
    res.add(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    res.add(arr2[j]);
  }

  return [...res];
}

// time & space complexity : O(n) & O(n)
//optimize one
function union(arr1, arr2) {
  const res = [];

  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      // checks for empty / not duplicates
      if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (res.length === 0 || res[res.length - 1] !== arr2[j]) {
        res.push(arr2[j]);
      }
      j++;
    } else {
      if (res.length === 0 || res[res.length - 1] !== arr1[i]) {
        res.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  //if something left
  while (i < arr1.length) {
    if (!res.includes(arr1[i])) {
      res.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (!res.includes(arr2[j])) {
      res.push(arr2[j]);
    }
    j++;
  }

  return res;
}

console.log(union([1, 2, 3, 4, 5], [1, 2, 3]));
