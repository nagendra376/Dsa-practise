// gcd (euclidean algorithm)

function findGcd(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  if (a == 0) {
    return b;
  } else {
    return a;
  }
}

console.log(findGcd(100, 20));
