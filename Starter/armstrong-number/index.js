// An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

function armstrongNumber(n) {
  let sum = 0;
  let og = n;
  while (n > 0) {
    let ld = n % 10;
    sum = Math.floor(sum + ld * ld * ld);
    n = Math.floor(n / 10);
  }
  console.log(sum);
  if (sum == og) {
    return true;
  } else {
    return false;
  }
}

console.log(armstrongNumber(153));
