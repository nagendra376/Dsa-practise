// 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

function PrimeNumber(n) {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n === 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

PrimeNumber(9);

console.log(PrimeNumber(9));
