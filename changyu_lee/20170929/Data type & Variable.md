# Data type & Variable

## 1. Data Type (자료형)

ES6에서는 7개의 Data type을 정의한다.

* 기본 자료형
    * `Boolean`
    * `null`
    * `undefined`
    * `Number`
    * `String`
    * `Symbol` (ES6에서 추가됨)
* 객체형
    * `Object`

### 1-1. 기본 자료형 (Primitive Data Type)

기본자료형의 값은 변경 불가능한 값이며, pass-by-value이다.

#### 1-1-1. Boolean

논리적인 요소로, `true` 와 `false`의 두 가지 값을 가진다.

비어있는 문자열, `null`, `undefined`, 숫자 0은 `false`로 간주된다.

#### 1-1-2. null

null 타입은 `null` 값을 가진다. 자바스크립트는 대소문자를 구분하므로, `null`은 Null, NULL 등과는 다르다.

`null`은 의도적으로 기본형 또는 object형 변수에 값이 없음을 명시한 것으로, 자바스크립트 엔진은 참조가 없어진 메모리 영역에 대해 가비지 콜렉션을 수행한다.

```
var a = 'Lee';
a = null; // 참조 정보가 제거됨
```

typeof 연산자로 null값을 가진 변수를 연산하면 object가 나오는데, 이는 자바스크립트 설계상의 문제이다.

```
 var a = null;
 console.log(typeof a); // object
```

따라서 null 타입의 변수인지를 확인할 때는 일치 연산자(===)를 사용해야 한다.

```
var a = null;
console.log(typeof a === null) // false
console.log(a === null);       // true
```

#### 1-1-3. undefined

값을 할당하지 않은 변수는 `undefined` 값을 가진다.

`undefined` 값은 선언되었지만 할당된 적이 없는 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근하는 경우에 반환된다.

```
var a;
console.log(a); // undefined

var bar = {
  name: 'Lee',
  gender: 'male'
};
console.log(bar);     // { name: 'Lee', gender: 'male' }
console.log(bar.baz); // undefined
```

#### 1-1-4. Number

자바스크립트는 하나의 숫자 자료형만 존재하며, 정수만을 표현하기 위한 특별한 자료형은 존재하지 않는다.

자바스크립트의 숫자 자료형에서는 추가적으로 아래의 값들도 표현이 가능하다.

* `+/- Infinity`
* `NaN` (not-a-number)

```
var a = 3;    // 정수
var b = 3.14; // 실수
var c = -5;   // 음의 정수

var xyz = 15 / -0;
console.log(xyz);         // -Infinity
console.log(typeof xyz);  // number

var bar = 1 * 'string';
console.log(bar);        // NaN
console.log(typeof bar); // number
```

#### 1-1-5. String

String(문자열) 타입은 텍스트 데이터를 나타내는데 사용한다.

문자열은 작은 따옴표('') 또는 큰 따옴표("")안에 텍스트를 넣어서 생성한다.

자바스크립트의 문자열은 기본자료형으로 변경이 불가능하다. 이것은 한 번 문자열이 생성되면 그 문자열을 변경할 수 없음을 의미한다.

```
var str = 'Hello';
str = 'world';
```

위의 예시 코드에서, 첫번째 구문이 실행되면 메모리에는 문자열 'Hello'가 생성되고  식별자 str은 문자열 'Hello'의 메모리 주소를 가리키게 된다.
그리고 두번째 구문이 실행되면 새로운 문자열인 'world'가 메모리에 생성되고 식별자 str은 문자열 'world'의 주소를 가리키게 된다.
이 때, 문자열 'Hello'와 'world'는 모두 메모리에 존재하며 변수 str이 가리키는 문자열만 변경된 것이다.

```
var str = 'string';

console.log(str[0], str[1], str[2], str[3], str[4], str[5]);

str[0] = 'S';
console.log(str); // string
```

문자열은 배열처럼 인덱스를 통해 접근이 가능한데, 이를 유사 배열이라고 한다.

한번 생성된 문자열은 수정이 불가능하므로, str[0] = 'S'처럼 새로운 문자를 대입하여도 변경되지 않는다. (이 때 에러는 발생되지 않음)

새로운 문자열을 할당하는 것은 기존 문자열을 수정하는 것이 아닌 새롭게 할당하는 것으로 가능하다.

```
var str = 'string';
console.log(str); // string

str = 'String';
console.log(str); // String

str += ' test';
console.log(str); // String test

str = str.substring(0, 3);
console.log(str); // Str

str = str.toUpperCase();
console.log(str); // STR
```

#### 1-1-6. Symbol

Symbol은 ES6에서 추가된 Data type으로, 애플리케이션 전체에서 유일하며 변경이 불가능한 기본 자료형이다. 주로 객체의 프로퍼티 키(property key)로 사용한다.

```
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value
```

### 1-2. 객체형 (Object type)

객체는 이름과 값을 가지는 데이터를 의미하는 프로퍼티(property)와 동작을 의미하는 메소드(method)를 포함하는 독립적 주체이다.

자바스크립트는 객체 기반의 스크립트 언어로, 자바스크립트를 이루는 거의 모든 것이 객체이다.

기본 자료형을 제외한 나머지(배열, 함수, 정규표현식 등)는 모두 객체이다. 객체는 pass-by-reference이다.

## 2. 변수 (Variable)

값을 유지할 필요가 있을 때 변수를 사용한다. 변수는 메모리 주소에 접근하기 위해 이해 가능한 언어로 지정한 식별자를 의미한다.

변수는 값을 저장(할당), 참조하기 위해 사용된다. 값을 유지해야 할 경우에 변수를 사용한다.

변수는 변수의 존재 목적을 쉽게 이해할 수 있도록 의미있는 이름을 지정해야한다.

* 변수의 명명 규칙
    * 반드시 영문자(특수문자 제외), underscore(_), 또는 달러 기호($)로 시작해야 한다. 이어지는 문자에는 숫자(0~9)도 사용할 수 있다.
    * Javascript는 대/소문자를 구분하므로 사용 가능한 문자는 "A" ~ "Z" (대문자)와 "a" ~ "z" (소문자)이다.

변수를 선언할 때에는 `var` 키워드를 사용하며, 등호(=)는 값을 할당하기 위해 사용한다.

```
var name; // 변수 name 선언
name = 'Lee'; // 값 'Lee'를 변수 name에 할당함

var age = 25; // 변수 선언과 할당이 동시에 이루어짐
```

선언만 되고 할당이 이루어지지 않은 변수는 `undefined` 초기값을 가지게 된다. 선언되지 않은 변수에 접근하게 되면 `ReferenceError` 가 발생한다.

```
var a;
console.log(a); // undefined
console.log(b); // ReferenceError
```

### 2-1. 변수의 중복 선언

변수는 중복 선언이 가능하다. 문법적으로는 허용되지만 사용하지 않는 것이 좋다. (의도치 않게 변수의 값이 변경될 수 있음)

```
var a = 1;
console.log(a); // 1

// 중복 선언
var a = 10;
console.log(a); // 10
```

### 2-2. var 키워드 생략 허용

변수 선언 시 var 키워드를 생략할 수 있다. 문법적으로는 허용되지만 사용하지 않는 것이 좋다.(의도치 않게 변수가 전역 변수가 되어버림)

### 2-3. 동적 타이핑 (Dynamic Typing)

Javascript는 동적 타입 언어로, 변수에 값이 할당되는 과정에서 자료형이 자동으로 결정된다. 따라서 같은 변수에 여러 data type의 값을 대입할 수 있는데, 이를 동적 타이핑이라고 한다.

```
var foo;

console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 3;
console.log(typeof foo);  // number

foo = 3.14;
console.log(typeof foo);  // number

foo = 'Hi';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean
```

### 2-4. 변수 호이스팅

호이스팅은 var 선언문이나 function 선언문을 해당 Scope의 선두로 옮기는 것을 의미한다.

#### 변수 호이스팅의 과정

1. var 키워드로 선언된 변수는 선언과 초기화가 동시에 이루어진다.

2. 변수 선언문 이전에 변수에 접근하면 undefined가 반환된다. => 변수 호이스팅

3. 변수 할당문에 도달하면 값의 할당이 이루어진다.

### 2-5. var 키워드로 선언된 변수의 문제점

1. Function-level scope
    * for loop 초기화식에서 사용한 변수를 for loop 외부 또는 전역에서 참조 가능
2. var 키워드의 생략 허용
    * 의도치 않게 변수를 전역화 할 수 있다.
3. 중복 선언 허용
    * 의도치 않게 변수의 값을 변경할 수 있다.
4. 변수 호이스팅
    * 변수 선언 전에 참조가 가능함.

ES6에서는 var의 단점을 보완하기 위해 let과 const 키워드가 도입되었다.