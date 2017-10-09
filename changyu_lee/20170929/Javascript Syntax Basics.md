# 브라우저의 동작 원리와 Javascript 기초 문법

## 1. 브라우저 동작 원리

브라우저는 script 태그를 만나면 아래와 같이 작동한다.

1. 웹페이지의 파싱을 중단한다.

2. src 어트리뷰트에 정의된 javascript 파일을 로드, 파싱, 실행한다.

3. 중단된 웹페이지 파싱을 계속 진행한다.

script는 HTML의 `body` 요소 가장 아래에 위치시키는 것이 가장 좋은데, 그 이유는 아래와 같다.
 
1. 웹페이지 파싱 이후 script의 파싱과 실행이 진행되므로 페이지의 로딩 시간이 단축된다.

2. DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작하면 에러가 발생할 수도 있다.

## 2. async / defer

스크립트 로딩 지연으로 인한 병목현상을 방지하기 위해 HTML5에는 script 태그에 `async`와 `defer` 어트리뷰트가 추가되었다.

```
<script async src="example.js"></script>
<script defer src="example.js"></script>
```

`async`와 `defer`의 차이는 아래와 같다.

* async : 웹페이지의 파싱과 외부 스크립트 파일의 다운로드가 동시에 진행되며, 스크립트는 다운로드 완료 직후 실행된다.

* defer : 웹페이지 파싱과 외부 스크립트 파일의 다운로드가 동시에 진행되는 점은 async와 동일하지만, 스크립트가 웹페이지 파싱 완료 직후 실행된다는 점이 다르다.

## 3. Javascript Syntax Basics

### 3-1. 구문 (Statement)

각각의 명령을 구문이라고 한다.
구문은 값, 연산자, 표현식, 키워드, 주석으로 구성되며 세미콜론(;)으로 끝난다.

```
// Examples of Statement

var a = 1;
var b = 2;
var c = a + b;

console.log(c);
```

구문은 코드 블록으로 그룹화 할 수 있다.
함께 실행되어야 하는 구문을 정의하기 위해 그룹화를 진행한다.

```
// 함수
function myFunction(x, y) {
  return x + y;
}

// if 문
if(x > 0) {
  // do something
}

// for 문
for (var i = 0; i < 10; i++) {
  // do something
}
```

구문은 일반적으로 순서대로 실행되지만, 조건문(if, switch) 또는 반복문(while, for)을 사용하여 실행순서를 제어할 수 있다.
이를 흐름제어(Control Flow)라고 한다.

### 3-2. 표현식 (Expression)

표현식은 값, 변수 연산자의 조합으로, 연산을 통해 하나의 값을 만들게 된다. 즉, 하나의 값으로 평가(연산) 가능한 문장을 표현식이라고 한다.

```
5 * 10                  // 50
'Hello' + ' ' + 'world' // 'Hello world'
```

### 3-3. 변수 (Variable)

변수는 값을 저장(할댱), 참조하기 위해 사용한다.
변수를 선언할 때에는 `var` 키워드를 사용한다.

```
var a; // 변수 선언 및 초기화
a = 3; // 정수 값 3 할당
```

### 3-4. 값 (value)
#### Javascript의 data type
* 기본 자료형
    * `Boolean`
    * `null`
    * `undefined`
    * `Number`
    * `String`
    * `Symbol` (ES6에서 추가됨)
* `Object`

자바스크립트는 값의 자료형에 따라 변수에 데이터 타입을 명시하지 않는다.

```
// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// Number
var num1 = 1001;
var num2 = 10.50;

// String
var string1 = 'Hello';
var string2 = "World";

// Object
var obj = { name: 'Lee', gender: 'male' };

// Array
var array = [ 'Black', 'Gray', 'White' ];
```

### 3-5. 연산자 (Operator)

하나 또는 그 이상의 값을 하나의 값으로 만들 때 연산자를 사용한다.

### 3-6. 키워드 (Keyword)

키워드는 수행할 동작을 규정한 것으로, 예를 들면 `var` 키워드는 새로운 변수를 생성할 것을 지시하는 키워드이다.

### 3-7. 주석 (Comment)

작성된 코드의 의미를 설명하기 위해 주석을 사용한다.
다른 누군가가 코드를 읽을 때 해석하기 힘든 구간에 주석을 다는 일이 중요하다. (읽기 쉬운 코드가 좋은 코드이기 때문)
한줄 주석은 `//` 다음에 작성하고, 주석이 여러 줄일 경우에는 `/*` 과 `*/` 사이에 작성한다.
