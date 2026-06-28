// 1. Understand recursion by printing something N times

function printNTimes(n) {
  if (n <= 0) {
    return;
  }

  console.log("Hello, World!");
  printNTimes(n - 1);
}

printNTimes(5);

// 2. Print your name N times

function printNTimes(name, n) {
  if (n <= 0) {
    return;
  }

  console.log(name);
  printNTimes(name, n - 1);
}

printNTimes("nagendra", 5);

// 3. Print 1 to N

function printNTimes(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  printNTimes(i + 1, n);
}

printNTimes(1, 5);

// 4. Print N to 1

function printNTimes(n, i) {
  if (i > n) {
    return;
  }
  console.log(n);
  printNTimes(n - 1, i);
}

printNTimes(5, 1);

// 5. Sum of First N Numbers

function sum(n) {
  if (n === 0) return 0;

  return n + sum(n - 1);
}

console.log(sum(5));
