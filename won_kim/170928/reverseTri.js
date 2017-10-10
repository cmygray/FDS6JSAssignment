function regularTri(n) {
  var result = '';
  for (var cnt = 0; cnt < n; cnt++) {
    for (var k = 0; k < cnt; k++) {
      result += ' ';
    }
    for (var j = 0; j < 2 * (n - 1 - cnt); j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}
console.log(regularTri(4));