function alphaString46(s) {
  var str = '' + s;
  var result = '';
  var len = str.length;
  if (len >= 4 && len <= 6 && parseInt(s) !== NaN) {
    result += 'true';
  } else {
    result += 'false';
  }
  return result;
}

console.log(alphaString46('1234'));
console.log(alphaString46('723'));
console.log(alphaString46('a234'));
console.log(alphaString46(''));
console.log(alphaString46());