// 01. 요일 구하기
// 두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다

var getDayName = function(month, day) {
    var result;
    var date = new Date(2017, month - 1, day);

    switch (date.getDay()) {
        case 0:
            result = 'SUN';
            break;
        case 1:
            result = 'MON';
            break;
        case 2:
            result = 'TUE';
            break;
        case 3:
            result = 'WED';
            break;
        case 4:
            result = 'THU';
            break;
        case 5:
            result = 'FRI';
            break;
        default:
            result = 'SAT';
    };

    return result;
};

var getDayName = function(month, day) {
    var date = new Date(2017, month - 1, day);
    var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var result = dayNames[date.getDay()];
    
    return result;
};

console.log(getDayName(10, 10));

// 02. 짝수와 홀수
// evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다
// num이 짝수일 경우 'Even'을 반환하고 홀수인 경우 'Odd'를 반환하도록 evenOrOdd에 코드를 작성하라
// 단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다

var evenOrOdd = function(number) {
    var result;

    if(number >= 1 && number % 2 === 0){
        result = 'Even';
    } else if(number >= 1 && number % 2 !== 0){
        result = 'Odd';
    } else {
        result = '유효한 범위의 값을 입력하세요';
    };

    return result;
};

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(-1));// 유효범위

var evenOrOdd = function(number) {

    var result = number >= 1 ? (number % 2 === 0 ? 'Even' : 'Odd') : '유효한 범위의 값을 입력하세요';

    return result;
};

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(-1));// 유효범위

// 03. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라
// 예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다

var alphaString46 = function(str) {
    var result;
    var integer = parseInt(str);

    // 매개변수로 인자가 아무것도 넘어간게 없어도 false가 출력되어야 하므로arguments객체의 length도 체크
    // 다른 방법으로는 !str 조건을 체크하는 방법이 있음
    if(arguments.length !== 0 && str.length >= 4 && str.length <= 6 && !isNaN(integer)) {
        result = true;
    } else {
        result = false;  
    };

    return result;
};

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false

// 04. 1 ~ 10000의 숫자 중 8이 등장하는 횟수 구하기(복습)
// 1부터 10000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라
// 단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다
// 예를들어 8808은 3, 8888은 4로 카운팅 해야 한다

var getCount8 = function() {
    var str = '';
    var result = 0;

    for(var i = 1; i <= 10000; i++) {
        str += i;
    };

    for(var j = 0; j < str.length; j++) {
        if(str.charAt(j) === '8') result += 1;
    };

    return result;
};

var getCount8 = function() {
    var str = '';
    var result = 0;

    for(var i = 1; i <= 10000; i++) {
        str = i.toString();

        for(var j = 0; j < str.length; j++) {
            if(str.charAt(j) === '8') result += 1;
        };
    };
    
    return result;
};

console.log(getCount8());