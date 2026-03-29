// 12 - 1, 2, 3, 4, 6, 12

function factor(n) {
  let multiply = 1;
  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

factor(12);
