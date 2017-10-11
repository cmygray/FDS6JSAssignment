
숙제 1
``` javascript
function getCount() {
  var str = '';
  var count = 0;
  for (var i = 0; i <= 10000; i++) {
    str += i;
  }
  for (j = 0; j < str.length; j++) {
    if (str[j] === '8') {
      count++;
    }
  }
  return count;
}
console.log(getCount());
```
숙제 2
``` javascript
function getDayName(a, b) {
  var myYear = new Date();
  myYear.setFullYear(2016, a - 1, b);
  var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', ];
  return dayNames[myYear.getDay()];
}

console.log(getDayName(5, 24));
```
숙제 3 if문으로
``` javascript
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}
console.log(evenOrOdd(1000));
```
숙제 3 3항 연산자로
``` javascript
function evenOrOdd(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(evenOrOdd(1000));
```
숙제 4
``` javascript
function alphaString46(s) {
  var tmpStr = '';
  var tmp = 0;
  // Parameter가 없을 때 방어 코드
  if (typeof(s) == 'string') {
    tmpStr = s;
  } else {
    return false;
  }
  // True or False
  if (tmpStr.length >= 4 && tmpStr.length <= 6) {
    for (var i = 0; i < tmpStr.length; i++) {
      tmp += tmpStr.charAt(i) % 1;
    }
    return tmp === 0 ? true : false;
  } else {
    return false;
  }

}

console.log(alphaString46());
```