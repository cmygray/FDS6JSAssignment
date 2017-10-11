//quiz 1.
function getCount8() {
  var str = '';
  var res = 0
  for (var i = 0; i < 101; i++) {
    str += i;
  }
  console.log(str);
  var len = str.length;
  for (var j = 0; j < len; j++) {
    if (str[j] === '8') {
      res++;
    }
  }
  return res;
}
console.log(getCount8());
//quiz 26
// function getDayName(a, b) {
//   var week = new Array('sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat');
//   var d = new Date('2016/01/01')
//   var r = d.getDay();
//   var res = week[r];
//   return res;
// }
// console.log(getDayName());
// console.log(getDayName(5, 23));
// quiz 2
function evenOrOdd1(num) {
  if (num % 2 == 0) {
    return 'even';
  } else {
    return 'odd';
  }
}
console.log(evenOrOdd1(15));

function evenOrOdd2(num) {
  return (num % 2 == 0) ? 'even' : 'odd';
}
console.log(evenOrOdd2(32));
//quiz 3
function alphaString46(s) {
  var alpha = /^[0-9]{4,6}$/;
  return alpha.test(s);
}
console.log(alphaString46('1234'));
console.log(alphaString46('a234'));