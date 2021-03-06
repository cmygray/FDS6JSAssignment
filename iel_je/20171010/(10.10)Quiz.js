//문제 1

function getEight(number) {
  var count = 0;
  var allString = '';

  for (var i = 0; i <= number; i++) {
    i.toString();
    allString += i;
  }

  for (var index = 0; index <= allString.length; index++) {
    if (allString[index] === '8') {
      count += 1
    }
  }

  console.log(count);
}

getEight(10000);

//문제 2
//2016년 1월 1일은 금요일이다. 
//2016년 a월 b일은 무슨 요일일까? 
//두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.

//요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다. 예를 들어 a=5, b=24가 입력된다면 5월 24일은 화요일이므로 TUE를 반환한다.

function getDayName(a, b) {
  //올해년도
  var thisYear = 2017;

  //선택일자
  var selDate = new Date(thisYear, a, b);

  var arrDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return arrDay[selDate.getDay()];
}

console.log(getDayName(5, 24)); // TUE


// 문제 3
// evenOrOdd 함수는 정수 num을 매개변수로 받는다.num은 1 이상의 정수이며, num이 음수인 경우는 없다.num이 짝수일 경우 'Even'
// 을 반환하고 홀수인 경우 'Odd'
// 를 반환하도록 evenOrOdd에 코드를 작성하라.

// 단, if문을 사용한 답과 3 항 연산자를 사용하는 답 두가지를 제시하여야 한다.

// if문
function evenOrOdd(num) {
  //num이 정수가 아닐 때 처리
  if (num < 1) {
    return "Not Even and Odd";
  } else if (num % 2 === 1) {
    return "Odd";
  } else {
    return "Even";
  }
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd(num) {
  var signal;
  //num이 정수가 아닐 때 처리
  signal = num % 2 === 1 ? "Odd" : "Even";
  signal = num < 1 ? "Not Even and Add" : signal;
  return signal
}
console.log(evenOrOdd(0));
console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even




// 4번 문제

// alphaString46 함수는 문자열 s를 매개변수로 입력받는다.s의 길이가 4~6 이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.예를들어 s가 'a234'
// 이면 false를 리턴하고 '1234'
// 라면 true를 리턴한다

function alphaString46(s) {
  //인자가 없을 떄
  if (arguments.length === 0) {
    return false;
  }

  //글자가 4개 미만이거나 6개 초과 일 때
  if (4 > s.length || 6 < s.length) {
    return false;
  }

  //형변환
  var chkNotNumber = parseInt(s);

  //형변환 후 NaN 출력시 false
  if (!chkNotNumber) {
    return false;
  }

  return true;
}

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false