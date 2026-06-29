// check palindrome

function f(i, n) {
  if (i >= Math.floor(n.length / 2)) return true;
  if (n[i] !== n[n.length - i - 1]) return false;
  return f(i + 1, n);
}

function isPalindrome(n) {
  return f(0, n);
}

console.log(isPalindrome("madam"));
