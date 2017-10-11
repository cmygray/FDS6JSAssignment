// 문제 5. 이상한 문자 만들기
function toWeirdCase(s) {
  const words = s.toUpperCase().split(' ');
  const n = words.length;
  for (let w = 0; w < n; w++) {
    const chars = words[w].split('');
    const len = chars.length;
    for (let c = 0; c < len; c++) {
      chars[c] = c % 2 ? chars[c].toLowerCase() : chars[c];
    }
    words[w] = chars.join('');
  }
  return words.join(' ');
}
// console.log(toWeirdCase('hello world'));

// 문제 4-1. 문자열 내 p, y의 개수 if문
function numPY(s) {
  let count = 0;
  s.toLowerCase();
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (s[i] === 'p') {
      count += 1;
    } else if (s[i] === 'y') {
      count -= 1;
    }
  }
  return !count;
}
// console.log(numPY(''));

// 문제 4-2. 문자열 내 p, y의 개수 정규표현식
function numPYI(s) {
  const numP = s.match(/p/ig) ? s.match(/p/ig).length : 0;
  const numY = s.match(/y/ig) ? s.match(/y/ig).length : 0;
  return numP === numY;
}
// console.log(numPYI(''));
