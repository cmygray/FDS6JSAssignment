
## 02. Javascript Introduction

* Javascript는 **프로토타입 기반 객체지향 언어**이다
* 대부분의 모던 브라우저는 ES6을 지원하지만, IE지원을 고려한다면 babel과 같은 Transpiler를 사용해야 한다

## 03. Javascript Syntax Basic

* 브라우저 동작 원리
  * DOM트리 구축을 위한 파싱 -> 렌더트리 구축 -> 배치 -> 그리기
  * HTML파싱 중 script태그를 만나면, 파싱을 중지하고 script에 정의된 자바스크립트 파일을 로드한다  
  [참고-stackoverflow](https://stackoverflow.com/questions/4396849/does-the-script-tag-position-in-html-affects-performance-of-the-webpage)

* Javascript는 블록 유효범위(Block-level scope)가 없다. 함수 단위의 유효범위(Function-level scope)만이 생성된다

* Javascript는 7가지의 데이터 타입을 제공한다. 기본 자료형(Boolean/null/undefined/Number/String/ES6에서 추가된 Symbol) 과 Object타입이 있다

* `new`는 연산자(Operator)

## 04. javascript Data Type & Variable

* Javascript는 Type annotation이 없어 값이 할당되는 과정에서 자동으로 자료형이 결정된다

* 기본 자료형의 값은 값(value)로 전달된다. 이를 pass-by-value라고 한다. 기본 자료형은 값이 한번 정해지면 변경할 수 없다(immutable)

* Boolean : 빈 문자열(''), `null`, `undefined`, `NaN`, **숫자 0**은 false로 간주된다

* null타입 변수인지 확인할 때는 typeof연산자 대신 일치 연산자(===)를 사용해야 한다

* 존재하지 않는 객체 프로퍼티에 접근할 경우에도 `undefined`를 리턴한다

* Javscript는 `Number`타입을 **64비트 부동소수점(IEEE 754)** 형태로 나타낸다. 그외에도 `+/- Infinity`와 `NaN(Not a Number)`로 나타낼 수 있다
```
console.log(0.1+0.2);               // result -> 0.30000000000000004
```
* Javascript의 문자열은 기본 자료형으로 변경 불가능(immutable)하다. 또한 배열처럼 접근할 수 있는 **유사 배열** 성질을 가지고 있다

* `Symbol`은 ES6에서 새롭게 추가되었으며, 애플리케이션 전체에서 유일하며 변경 불가능한 기본 자료형이다. 주로 객체의 property key로 사용한다

* 기본형을 제외한 나머지들 값들은 모두 객체이다. 객체는 pass-by-reference이다

* 변수(Variable)는 메모리 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 식별자(identifier)이다

* 변수 선언시 `var`키워드를 생략 가능하지만, `var`를 생략할시 기본적으로 전역 변수가 되기 때문에 사용하지 않는 것이 좋다

* Javascript의 변수는 호이스팅(Hoisting)이 발생한다. VO에 선언(선언 단계) -> 메모리 공간 확보 후 undefined로 초기화(초기화 단계)가 동시에 일어난다. undefined로 초기화된 변수는 할당문제 도착했을때 실제 값이 할당(할당 단계)된다

* Javascript의 변수는 function-level scope를 가지나, ES6에서 도입된 `let`, `const`키워드를 사용하여 block-level scope를 사용할 수 있다

## 05. Javascript Operator

* `+연산자`는 문자열 연결 연산을 포함한다

* ==(loose equality)는 타입이 다를 경우 형변환 후 비교하지만, ===(strict equality)는 타입이 다르더라도 형변환 하지 않고 비교한다. 의도한 것이 아니라면 ===(일치) 연산자를 사용하는것이 좋다

* `typeof`연산자는 피연산자의 데이터 타입을 문자열로 리턴한다. 다만 null과 배열의 경우 ojbect, 함수는 function을 리턴한다

* `instanceof`연산자는 객체가 동일 객체형의 인스턴스이면 true를 리턴한다

* `!!`연산자는 피연산자를 Boolean값으로 리턴한다. 객체의 존재를 확인 후 그 결과를 리턴해야 하는 패턴에서 자주 사용된다

## 06. Javascript Control Flow

* if 조건문은 조건이 true일 경우, 해당 코드 블럭을 수행하지만, 그 이후의 나머지 else if 조건은 체크하지 않는다. 반면 switch문은 기본적으로 나머지의 case도 전부 체크한다

* `break`는 반복문을 탈출하고, `continue`는 현재 실행 블럭을 스킵하고 다음 조건으로 이동한다

* Javascript는 문맥을 고려하여 내부적으로 자료형을 암묵적 형변환이 일어난다. 이는 의도하지 않은 연산이 이루어 질 수 있으므로 주의가 필요하다

## 07. Javascript Object

* 객체는 다른 객체를 포함할 수 있기 때문에, 그래프나 트리와 같은 자료구조를 쉽게 표현할 수 있다

* ES6부터 `Class`를 제공하지만, 클래스도 사실 함수이고 **기존 prototype기반 패턴의 Syntactic sugar**이다

* 객체 리터럴 방식으로 생성된 객체는 내부적으로 `Object()`생성자 함수를 사용하여 객체를 생성한다

* 생성자 함수는 형식이 정해진 것이 아니라, `new`연산자를 붙여서 호출하면 생성자 함수로 동작한다. new연산자를 사용한 생성자 함수는 `this`의 바인딩이 일반 함수와 다르게 동작한다

* 프로퍼티의 값은 undefined를 제외한 모든 값과 표현식이 올 수 있으며, 값이 함수인 경우를 메서드라고 한다

* 객체에 존재하지 않는 프로퍼티를 참조하면 undefined를 리턴한다

* 객체의 프로퍼티에 새 값을 할당하여 갱신 / 동적으로 생성할 수 있으며, `delete`연산자를 이용하여 객체의 프로퍼티를 삭제할 수 있다. 하지만 delete연산자로 객체 자체의 삭제는 불가능하다

* `for-in`문은 객체의 모든 프로퍼티를 순회하지만, 배열 객체에는 사용하지 않는 것이 좋다. 그 이유는
  * 프로퍼티의 순서를 보장하지 않는다. 객체는 순서가 없지만 배열은 index가 있다
  * 배열 요소만을 순회하지 않는다(배열도 객체이기 때문에 배열 요소가 아닌 프로퍼티를 동적 할당할 수 있다)
  * 배열 객체는 위와 같은 문제를 해결하기 위해 ES6에서 추가된 `for-of`문을 사용한다

## 08. Javascript Immutability

<!-- 보류 -->