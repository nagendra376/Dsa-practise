function generateOtp(n) {
  let otp = "";
  for (let i = 0; i < n; i++) {
    otp = otp + Math.floor(Math.random() * 10);
  }
  return otp;
}

console.log(generateOtp(5));
