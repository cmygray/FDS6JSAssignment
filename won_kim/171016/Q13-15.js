// 13. 소수찾기

function countPrime(n) {
  const primeArr = [];
  for (let i = 2; i < n; i++) {
    const len = primeArr.length;
    const notSquare = !Number.isInteger(Math.sqrt(i));
    if ((i === 2) || (i === 3) || (i === 5)) {
      primeArr[len] = i;
    }
    if ((i % 2) && (i % 3) && (i % 5) && notSquare) {
      primeArr[len] = i;
    }
  }
  return primeArr.length;
}

console.log(countPrime(10));



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