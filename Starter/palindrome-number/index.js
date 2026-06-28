// palindrome number is the number that remains the same when its digits are reversed. For example, 121 is a palindrome number because it reads the same forwards and backwards.

function isPalindrome(num) {
  let reversedNum = 0;
  let originalNum = num;

  while (num > 0) {
    lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reversedNum === originalNum;
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));
