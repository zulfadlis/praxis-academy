let gcd = function (a, b) {
  if (b == 0) {
    return a;
  }
  return gcd(b, a % b);
};
console.log(gcd(4510, 5993));
