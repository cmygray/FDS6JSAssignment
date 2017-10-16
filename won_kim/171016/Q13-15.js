// 13. 최대공약수와 최소공배수

function gcdlcm(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  while (max % min !== 0) {
    const remain = max % min;
    max = Math.max(remain, min);
    min = Math.min(remain, min);
  }
  const gcd = min;
  const lcm = (a * b) / gcd;
  return [gcd, lcm];
}
console.log(gcdlcm(3, 12));

// 리팩토링: 여러 숫자의 최소공배수

function nlcm(...num) {
  const numbers = Array.prototype.slice.call(num);
  const result = numbers.reduce(function (a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    while (max % min !== 0) {
      const remain = max % min;
      max = Math.max(remain, min);
      min = Math.min(remain, min);
    }
    const gcd = min;
    const lcm = (a * b) / gcd;
    return lcm;
  });
  return result;
}
console.log(nlcm(3, 6, 12, 20, 100));



// 14. 피보나치 수

function fibonacci(n) {
  const fiboArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fiboArray[i] = fiboArray[i - 2] + fiboArray[i - 1];
  }
  return n >= 2 ? fiboArray[n] : undefined;
}
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))

function nthFibonacci(n) {
  let prv = 0;
  let cnt = 1;
  for (let i = 0; i < n - 1; i++) {
    const nextFibo = prv + cnt;
    prv = cnt;
    cnt = nextFibo
  }
  return cnt
}
console.log(nthFibonacci(2))
console.log(nthFibonacci(3))
console.log(nthFibonacci(4))
console.log(nthFibonacci(5))
console.log(nthFibonacci(6))



// 15. 하샤드 수

function isHarshad(n) {
  const divider = n.toString().split('').reduce(function (sum, item) {
    return parseInt(sum, 10) + parseInt(item, 10);
  });
  return n % divider === 0;
}
console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false