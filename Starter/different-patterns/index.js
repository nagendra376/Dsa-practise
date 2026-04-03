// *
// **
// ***
// ****
// *****

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

// 1
// 12
// 123
// 1234
// 12345

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j.toString());
    }
    console.log();
  }
}

// A
// AB
// ABC
// ABCD
// ABCDE

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let char = 65;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(char));
      char++;
    }
    console.log();
  }
}

// _ _ _ _ *
// _ _ _ * *
// _ _ * * *
// _ * * * *
// * * * * *

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write("_ ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// *****
// ****
// ***
// **
// *

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

//     *
//    * *
//   * * *
//  * * * *
// * * * * *

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// *    *
//  *  *
//   *
//  *  *
// *    *

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == j || i + j == n + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}
