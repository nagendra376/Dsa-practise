// 1- with extra space (using hashing) time-O(n) space-O(n)

function containsDuplicate(arr) {
  const arrSet = new Set();

  for (const num of arr) {
    if (arrSet.has(num)) return true;

    arrSet.add(num);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));

// 2- without extra space time-O(n logn) space-O(1) 

function containsDuplicate(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }

  return false;
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
