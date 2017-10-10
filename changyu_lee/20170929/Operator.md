# Javascript Operator

연산자는 하나 혹은 그 이상의 값을 하나의 값으로 만들 때 사용한다.

## 1. 산술 연산자

1. +, -, *, /, % (나머지), ++ (증가), -- (감소)

2. ++ 연산자와 -- 연산자는 위치에 따라 연산방법이 바뀐다.

    ```
    var a = 3;
    var b = 5;
    var c;

    c = x++; // 선 대입 후 증가
    c = ++x; // 선 증가 후 대입

    c = x--; // 선 대입 후 감소
    c = --x; // 산 감소 후 대입
    ```

3. `+ 연산자`는 덧셈과 문자열 연결 연산을 수행한다.

    * 연산 대상이 모두 숫자일 때 : 덧셈 연산

    * 그 외의 경우 : 문자열 연결 연산

## 2. 대입 연산자

1. = : 우항의 값을 좌항으로 대입함 (수학적 개념과 다름)

2. 단축표기법 : ex) x += y => x = x + y

## 3. 비교 연산자

1. == (동등비교) 
    - 형 변환 후 비교함

2. === (일치비교)
    - 타입까지 일치해야 true를 반환함

3. ? (삼항 연산자)
    - 조건문과 같이, 조건이 true일 때 반환할 값과 조건이 false일 때 반환할 값을 설정할 수 있다.

    ```
    // 삼항연산자(ternary operator)
    // 조건 ? 조건이 true일때 반환할 값 : 조건이 false일때 반환할 값

    var condition = true;
    var result = condition ? 'true' : 'false';
    console.log(result); // 'true'
    ```
4. 이 외에도 >, <, >=, <= 과 같이 수학에서 사용되는 것과 같은 연산자도 존재한다.

## 4. 논리 연산자

1. || (or) : 둘 중 하나라도 true이면 true

2. && (and) : 들 다 true일 때만 true

3. ! (not) : 논리 부정 연산자

```
// || (논리 합) 연산자
var o1 =  true || true;     // t || t returns true
var o2 = false || true;     // f || t returns true
var o3 =  true || false;    // t || f returns true
var o4 = false || (3 == 4); // f || f returns false

// && (논리곱) 연산자
var a1 =  true && true;     // t && t returns true
var a2 =  true && false;    // t && f returns false
var a3 = false && true;     // f && t returns false
var a4 = false && (3 == 4); // f && f returns false

// ! (논리 부정) 연산자
var n1 = !true;  // false
var n2 = !false; // true
var n3 = !'Cat'; // false
// 빈 문자열이 아니면 true로 간주함. 'Cat'은 true
```

## 5. 단축 평가
논리연산자가 Boolean 값과 함께 사용되지 않을 경우, 다음의 규칙을 따라 단축 평가가 진행된다.

```
true || anything : true
false || anything : anything
true && anything : anything
false && anything : false
```

단축평가로 검사되면 Boolean값으로 평가하기 위해 참조하여야 할 곳까지 진행 후, 평가를 중지하게 된 계기가 된 값을 반환한다.

## 6. 타입 연산자

1. typeof : 피연산자의 데이터 타입을 문자열로 반환함. null과 배열의 경우 object, 함수의 경우 function을 반환함.

2. instanceof : 객체가 동일 객체형의 인스턴스이면 true를 반환함.

## 7. !!

!! : 피연산자를 boolean값으로 변환한다.
