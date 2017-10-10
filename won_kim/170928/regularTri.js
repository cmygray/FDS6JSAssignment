function regularTri(n) {
  var result = '';
  for (var cnt = 0; cnt < n; cnt++) {
    for (var k = 0; k < n - cnt - 1; k++) {
      result += ' ';
    }
    for (var j = 0; j < 2 * cnt + 1; j++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}
console.log(regularTri(5));