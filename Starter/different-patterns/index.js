// ****
// ****
// ****
// ****
// ****

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

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

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

function pattern(n) {
  for (let i = 0; i <= 2 * n - 1; i++) {
    let star = i;
    let row = "";
    if (i > n) star = 2 * n - i;
    for (let j = 0; j < star; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

// 0
// 01
// 010
// 0101
// 01010

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let star = 1;
    if (n % 2 == 0) {
      start = 1;
    } else {
      start = 0;
    }
    for (let j = 0; j <= i; j++) {
      row = row + start;
      start = 1 - start;
    }
    console.log(row);
  }
}

// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    let space = 2 * (n - i);

    //number
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }

    //space
    for (let j = 1; j <= space; j++) {
      row += " ";
    }

    //number
    for (let j = i; j >= 1; j--) {
      row += j;
    }

    console.log(row);
    space -= space;
  }
}

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

function pattern(n) {
  let num = 1;

  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row = row + num + " ";
      num = num + 1;
    }
    console.log(row);
  }
}

// A
// AB
// ABC
// ABCD
// ABCDE

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + String.fromCharCode(65 + j);
    }
    console.log(row);
  }
}

// ABCDE
// ABCD
// ABC
// AB
// A

function pattern(n) {
  let num = 1;

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + String.fromCharCode(65 + j);
    }
    console.log(row);
  }
}

// ABCDE
// ABCD
// ABC
// AB
// A

function pattern(n) {
  let num = 1;

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + String.fromCharCode(65 + j);
    }
    console.log(row);
  }
}

//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    let char = 0;
    for (let j = 1; j <= n - i - 1; j++) {
      row += " ";
    }
    let ch = "A".charCodeAt(0);
    let midPoint = Math.floor((2 * i + 1) / 2);
    for (let j = 1; j <= 2 * i + 1; j++) {
      row += String.fromCharCode(ch);
      if (j <= midPoint) {
        ch++;
      } else {
        ch--;
      }
    }
    for (let j = 1; j <= n - i - 1; j++) {
      row += " ";
    }

    console.log(row);
  }
}
