// Calculate sum of array elements

function sumOfElements(arr) {
  return arr.reduce((total, num) => total + num, 0);
}

console.log(sumOfElements([1, 2, 4, 7, 7, 5]));
