function getCount8() {
  var str = '';
  var res = 0;
  for (var i = 0; i <= 10000; i++) {
    str += i;
  }
  var len = str.length;
  for (var j = 0; j < len; j++) {
    if (str[j] === '8') {
      res++;
    }
  }
  return res;
}
console.log(getCount8());