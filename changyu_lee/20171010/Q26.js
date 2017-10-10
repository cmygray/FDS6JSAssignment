function getDayName(a, b) {
  var daysName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var day = new Date(2016, a - 1, b);
  var result = daysName[day.getDay()];
  return result;
}

console.log(getDayName(5, 24));