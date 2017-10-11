//26. 요일 구하기

//2016 년 1 월 1 일은 금요일이다.2016 년 a월 b일은 무슨 요일일까 ? 두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.

//요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다.예를 들어 a = 5, b = 24 가 입력된다면 5 월 24 일은 화요일이므로 TUE를 반환한다.

function getDayName(a, b) {

  //Date 객체생성
  var today = new Date();

  //매개변수로 Month와 Day설정
  today.setMonth(a); //5
  today.setDate(b); //24

  var month = today.getMonth();
  var date = today.getDate();

  //요일 배열
  var weekNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  //특정 날짜를 Date 객체에 담는다(주의: month는 0부터 시작하므로 month-1)
  var inputDay = new Date(2016, month - 1, date);
  //요일 구하기
  var dayofnames = weekNames[inputDay.getDay()];

  return dayofnames;
}

console.log(getDayName(5, 24)); // TUE