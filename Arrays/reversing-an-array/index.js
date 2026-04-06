let arr = [1, 1, 0, 1, 0, 1, 1, 0, 0];
let i = 0;
let j = arr.length - 1;

while (i < j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
  i++;
  j--;
}

console.log(arr);
