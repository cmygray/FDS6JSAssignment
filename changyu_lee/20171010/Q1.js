function getCount8() {
  var str = '';
  var result = 0;
  for (var i = 1; i <= 10000; i++) {
    str += i;
  }

  var len = str.length;
  for (var j = 0; j < len; j++) {
    if (str.charAt(j) === '8') {
      result++;
    }
  }
  return result;
}

console.log(getCount8());