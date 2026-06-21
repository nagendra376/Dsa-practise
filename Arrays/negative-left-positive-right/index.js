let arr = [1, 1, 0, -1, 0, -1, -1, 0, 0];
let i = 0;
let j = arr.length - 1;

while (i < j) {
  if (arr[i] < 0) {
    i++;
  } else if (arr[j] >= 0) {
    j--;
  } else {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

console.log(arr);
