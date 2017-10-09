
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

* Javascript의 변수는 호이스팅(Hoisting)이 발생한다. VO에 선언(선언 단계) / 메모리 공간 확보 후 undefined로 초기화(초기화 단계)가 동시에 일어난다. undefined로 초기화된 변수는 할당문제 도착했을때 실제 값이 할당(할당 단계)된다

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

## 09. Javascript Function

* Javascript의 함수는 **일급 객체(First-class object)**이다

* 함수 선언식(Function declaration)은 함수명을 생략할 수 없다. 또한 **함수 호이스팅(Function Hoisting)**이 발생하므로 코드의 구조를 엉성하게 만들 수 있다고 지적한다

* 함수 표현식(Function expression)은 일반적으로 함수명을 생략한 익명 함수(anonymous function)를 사용하나, 기명 함수(named function)을 이용하여 재귀적 처리를 할 수 있다

* 함수는 Function() 생성자 함수로도 생성할 수 있는데, 함수 선언문과 함수 표현식 모두 **Function()생성자 함수로 함수를 생성하는것을 단순화** 시킨 것이다

* Javascript는 ES6의 let, const를 포함하여 모든 선언(var, function, class, ...)을 호이스팅한다

* 함수 호이스팅은 **함수 선언 / 초기화 / 할당**이 한번에 이루어진다

* 어떤 외부 상태도 변경하지 않는 함수를 순수 함수(Pure function), 외부 상태도 변경시키는 부수효과(side-effect)를 발생시키는 함수를 비순수 함수(Impure function)라 한다

* 반환값(return value)
  * `return`키워드는 함수를 호출한 코드(caller)에게 값을 리턴할 때 사용한다
  * 함수의 `return`키워드를 생략하면 암묵적으로 undefined를 리턴한다
  * 배열 등을 이용하여 복수의 값을 리턴할 수 있다

* 함수도 객체이므로 프로퍼티를 가질 수 있다

* 함수는 일반 객체와는 다른 함수 프로퍼티를 가진다(arguments, caller, length, name, prototype, ...)(이중 ES5 표준은 legnth, prototype 뿐이다(인사이드 자바스크립트 p.85))
  * arguments프로퍼티는 순회 가능한(iterable) 유사 배열 객체이다. 매개변수의 갯수가 확정되지 않은 **가변 인자 함수**를 구현할때 유용하게 사용된다. 
  * caller 프로퍼티는 자신을 호출한 함수를 의미한다
  * length 프로퍼티는 함수에 정의된 매개변수의 갯수를 의미한다. **arguments.length(매개변수로 넘겨받은 인자의 개수)**와 다르므로 주의해야 한다
  * name 프로퍼티는 함수명을 의미한다. 익명 함수일 경우 빈 문자열('')을 값으로 갖는다
  * prototype프로퍼티는 **함수 객체만이 가지고 있는 프로퍼티**로, 함수 객체가 **생성자**로 사용될 때 **생성된 객체의 부모 역할을 하는 객체(constructor프로퍼티를 가지는)**를 가리킨다
  
* 즉시호출함수 표현식(IIFE)은 초기화 처리, 전역 스코프 문제를 해결하는데 자주 사용된다

* 함수 내부에 정의된 함수를 내부 함수(Inner function)이라 한다. 내부함수는 자신을 포함하고 있는 부모함수의 변수에 접근할 수 있지만 부모함수는 자식인 내부함수의 변수에 접근할 수 없다. 또한 내부함수는 부모함수의 외부에서 접근할 수 없다

* 콜백 함수(Callback function)는 특정 이벤트가 발생했을 때 호출되는 함수를 말한다. 콜백 함수는 대부분 비동기 처리에 사용된다

* 콜백함수를 이용한 비동기 처리는 코드의 복잡성이 증가되고 가독성이 떨어지는 Callback Hell이 자주 발생한다. 이러한 문제를 극복하기 위해 ES6에서 Promise가 도입되었다

## 10. Javascript Prototype

* Javascript의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 이러한 부모 객체를 **Prototype객체 또는 Prototype**이라고 한다

* ES표준에 따르면 Javascript의 모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]프로퍼티를 가진다

* 프로토타입 객체는 constructor 프로퍼티를 갖는다. constructor 프로퍼티는 자신을 생성한 객체를 가리킨다

* 프로토타입 체인(Prototype Chain)은 해당 객체에 접근하려는 프로퍼티가 없으면, [[prototype]]프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체를 거슬러 올라가며 검색한다
  * 객체 리터럴 방식으로 생성한 객체는, Object()생성자 함수로 객체를 생성하므로, 객체 리터럴로 생성된 객체의 프로토타입의 객체는 Object.prototype이다
  * 함수는 Function()생성자 함수로 함수(객체)를 생성하므로, 함수(객체)의 prototype객체는 Function.prototype이다
  * 생성자 함수로 생성된 객체는, 생성자 함수를 이용하여 객체를 생성하므로 prototype객체는 생성자함수명.prototype이다
  * 모든 객체의 부모 객체인 Object.prototype객체에서 프로토타입 체인이 끝나기 때문에, Object.prototype객체를 프로토타입 체인의 종점(End of prototype chain)이라 한다

* 프로토타입 객체도 객체이므로 프로퍼티를 동적으로 추가/삭제할 수 있다. 변경사항은 프로토타입 체인에 반영된다

* 기본 자료형으로 프로퍼티나 메서드를 호출할 때, 기본 자료형과 연관된 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 된다

* 기본 자료형은 객체가 아니므로 프로퍼티나 메서드를 추가할 수 없지만, 기본 자료형의 프로토타입 객체인 기본자료형.prototype에 메서드를 추가하면 기본 자료형에도 메서드를 사용할 수 있다

* Javascript는 내장 객체(Built-in Object)의 프로토타입 객체에 개발자 임의로 메서드를 추가할 수 있다

* 객체를 생성할 때 프로토타입이 정해지지만, 정해진 프로토타입 객체를 다른 임의의 객체로 변경할 수 있다. 이러한 특징을 활용하여 OOP의 상속기능을 구현한다. 하지만 변경 이전의 [[Prototype]]바인딩은 유지된다

* 프로토타입 체인은 객체에 해당 프로퍼티가 없는 경우에만 동작한다

## 11. Javascript Scope

전역스코프 | 지역스코프 | 전역변수 | 지역변수
-----------|------------|----------|---------
코드 어디에서든 참조 가능 | 정의된 함수 내에서만 참조 | 전역스코프를 갖는 변수 | 지역스코프를 갖는 변수

* ES6에서 추가된 `let`키워드는 block-level scope를 사용할 수 있다

* Javascript는 타 언어와 달리 특별한 시작점이 없기 때문에, 글로벌 영역에 변수를 선언하기 쉬워 전역 변수를 남발하는 문제가 있다

* 변수명이 중복된 경우, 지역변수를 우선하여 참조한다

* 함수 영역에서 **전역 변수를 참조할 수 있으므로, 전역 변수의 값도 변경할 수 있다**

* 중첩 sopce는 가장 인접한 지역을 우선하여 참조한다

* `var`키워드 없이 함수 내에 전역에 없는 변수값을 할당하면, 해당 변수를 암묵적 전역(implied globals)로 선언한다

* Javascript는 함수가 선언된 시점에서의 유효버위를 갖는다. 이를 Lexical scoping(Static Scoping)이라 한다

* 최소한의 전역변수를 사용하는 방법 중 하나는, 전역변수 객체를 만들어 사용한다(더글라스 크락포드)

* 또다른 방법으로 즉시실행함수(IIFE)를 사용하여 전역 변수 사용을 억제할 수 있다

## 12. javascript this

* Javascript의 함수는 호출될 때, 인자값 이외에 argument객체와 this를 암묵적으로 전달받는다

* 기본적으로 함수 호출 시 this는 전역객체에 바인딩된다. 내부함수(메서드의 내부함수 포함)나 콜백함수도 전역객체에 바인딩된다

* 함수가 객체의 프로퍼티(메서드)이면 메서드 호출 패턴으로 호출된다. 이때 메서드 내부의 this는 해당 메서드를 소유한 객체(호출한 객체)에 바인딩된다

* `new`연산자와 함께 생성자 함수를 호출하면 this바인딩이 메서드나 함수 호출때와는 다르게 동작한다
  * 생성자 함수의 코드가 실행되기 전 빈 객체를 생성한다. **생성자 함수 내에서 사용되는 this는 생성한 빈 객체를 가리킨다**
  * this가 생성한 빈 객체를 가리키므로, this를 통해 생성된 객체에 프로퍼티와 메서드를 동적 할당한다
  * 리턴문이 없는 경우, this에 바인딩된 생성 객체가 리턴된다(명시적으로 리턴해도 결과는 같다). 하지만 리턴문이 this가 아닌 다른 객체를 리턴하는 경우, this가 아닌 해당 객체를 리턴한다

* 생성자 함수에 new연산자를 붙이지 않을 경우, 기본적으로 일반 함수로 동작하므로 this가 전역 객체에 바인딩된다

* 생성자 함수의 new연산자를 붙이지 않았을 경우를 대비해 Scope-Safe Constructor패턴을 사용한다. 대부분의 라이브러리에서 광범위하게 사용되는 패턴이다

* Javascript는 this바인딩을 명시적으로 할 수 있는 call, apply 메서드를 제공한다. 이 메서드들은 모든 함수 객체의 프로토타입 객체인 Function.prototype객체의 메서드이다

* apply와 call메서드는 콜백 함수의 this를 위해서 사용되기도 한다