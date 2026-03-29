// 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

function factorial(n) {
  let multiply = 1;
  for (i = n; i > 0; i--) {
    multiply *= i;
  }
  console.log(multiply);
}

factorial(6);
