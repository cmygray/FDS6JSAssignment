---
title: Learning ECMAScript
date: 2017-10-05 03:01:26
tags:
---
## Data type
- Primitive Data Type
    - Boolean
        - 부울이라는 사람이 고안한 대수 체계로, 컴퓨터에서는 연산의 값이 두개의 상태(True, False)로 귀결되는 것을 표현한 것이다.
        조건에 의한 분기 또는 반복문을 만들 때 유용하게 사용된다.
    - Number
        - 숫자 자료형으로 정수(Integer)와 실수(float)를 표현한다.
    - String
        - 문자 자료형으로 문자를 표현하며, Number자료형 간 형 변환도 가능하다.
    - null
        - 존재하지 않는 메모리 주소를 의미한다. 주로 메모리가 할당되기 전 초기화를 하기 위해 사용하였는데, 현재에는 큰 의미가 없기에 null 자체를 배제하는 움직임이 있다. 심지어 null reference를 만든 사람이 null을 만든것은 실수였다고 말하기까지 했다.
    - undefined
        - 변수에 자동적으로 할당되는 초기값으로 말 그대로 '아무것도 할당되지 않았을 때' 변수에 자동적으로 할당되는 기본값이다.
    - symbol
        -   ECMAScript6에서 등장한 기본 자료형으로, html의 <id>태그 같은 존재이다. 즉, 전체 구문에서 재사용되지 않을(또는 않아야 할)것들을 표현할 때 사용된다.
- Object
    - 위에서 언급한 기본 자료형을 제외한 모든 것들을 나타낸다.

## 변수(Variable)
변수란 사람이 이해할 수 있는 언어로 명명한 식별자이며, 메모리의 주소를 저장한다. 이때, 메모리의 주소를 살펴보면 해당 주소가 참조하고 있는 값 또는 실제로 가지고 있는 값을 알 수 있다.

## 객체(Object)
- 위의 Primitive data type을 제외한 모든것을 지칭하며, Property(name : value로 구성된 데이터)와 동작을 나타내는 method를 포함하고있다.
여기서 method란 object에 제한돼 있는 함수를 말하며 property의 값이 함수일 경우 일반 함수와 구분하기 위해 method라고 부른다.

## Object의 생성
- ### Object literal
    - object의 생성에 있어 가장 간결한 방식이다.
    중괄호를 사용하여 객체를 생성하며, property를 부여하지 않으면 빈 객체가 생성된다.
- ### Object 생성자 함수
    - new 연산자와 Object()생성자 함수를 사용하여 object를 만드는 방법이다.
    어떤 방법으로든 object를 생성할때, 실제 내부 동작은 모두 이 방법에 의해서 생성이 된다. 따라서 일반적인 경우에 굳이 이 방식으로 object를 만들 이유는 없다.
- ### 생성자 함수
    - 생성자 함수란, form이 같은 object를 찍어내는 함수이다.
    즉, property의 값 부분은 같은데 이름이 다른 여러 object를 만들 때 유용하게 사용되며, 이 때 'this'연산자를 이용한 형태가 자주 등장한다.

## Object property 접근
- object의 property 값에 접근하기 위한 방법으로는 마침표 표기법과 대괄호 표기법이 있다.
``` javascript
var dog = {
    'name' : 'Tommy',
    'gender' : 'female',
};
console.log(dog);   // 'name' : 'Tommy', 'gender' : 'female'
console.log(dog.name);  // 'Tommy'
console.log(dog['name']);   // 'Tommy'
console.log(dog.gender);    // 'female'
console.log(dog['gender']); // 'female'
```
Object의 property 값에 접근할 때, 특별한 경우(property의 이름이 Javascript의 예약어인 경우)에는 대괄호 표기법만을 사용해서 값에 접근 할 수 있지만, 이외의 경우에는 마침표 표기법과 대괄호 표기법 모두 사용 할 수 있다.

## Pass by reference & Pass by value
- ### Pass by value
    - Javascript의 기본 자료형 중, immutable한 자료형의 값을 가지고 있는 변수를 다른 변수에 할당할 때 내부적으로 이루어지는 동작으로, 해당 변수가 가지고있는 값을 copy하여 전달하는 방식을 말한다.
- ### Pass by reference
    - object를 값으로 가지고 있는 변수를 다른 변수에 할당 할 때 내부적으로 이루어지는 동작으로, object가 참조하고 있는 값을 공유하는 방식을 말한다.

## Function
- ### 함수란?
    - 함수란 특정 작업을 수행하기 위한 statement들을 그룹화 하는 것으로 모듈화의 근간이 된다.
- ### 함수의 정의
    - 함수를 정의하는 방식은 3가지로, Function declaration, Function expression, Function 생성자 함수로 나뉜다.

## Function declaration
- function function_name(parameter or arguments) {statement} 의 구조로 선언되며 function_name은 생략할 수 없다. 

## Function expression
- 함수의 object 특성을 이용하여 literal 방식으로 함수를 정의하고 변수에 할당하는 방식이다.
var variable_name = function(parameter or arguments) {statement}의 구조로 선언한다.
함수를 변수에 할당할 때, 변수는 함수명이 아닌 할당된 함수의 참조값을 저장하고, 호출될 때 함수명은 변수처럼 사용된다.

## Function constructor
- 위의 Function declaration 정의 방식과 Function expression 방식으로 정의된 함수들이 내부적으로 동작하는 방식으로 object constructor와 비슷한 개념이다.

``` javascript
var foo = function(a, b) {
    return a + b;
};

var bar = foo;

console.log(foo(10,10));  // 20
console.log(bar(10,10));  // 20
```

## Function Hoisting
- 함수도 변수와 같이 Javascript에서 로딩되는 시점에서 Hoisting이 일어난다.
그런데, 함수의 Hoisting은 정의 방식에 따라 약간의 차이가 있다.

    - ### Function declaration으로 정의할 경우
        - Javascript는 모든 선언문(variable, function)을 해당 scope의 최상위로 옮기는 hoisting 작업을 한다.
        function declaration 방식으로 정의된 함수는 Javscript 엔진이 script가 로딩되는 시점에 초기화하고, 이를 variable object에 저장하여 함수의 선언, 초기화, 할당을 한번에 처리한다. 그렇기 때문에 함수의 위치와 상관 없이 소스 내 어느 곳에든지 함수 호출이 가능하다.

    - ### Function expression으로 정의할 경우
        - 이 경우, 변수에 함수를 할당하기에 함수는 Function hoisting이 아닌 Variable hoisting방식으로 hoisting된다.
        따라서 Javascript에서 로딩 될 때 Variable Object에 함수를 할당하지 않고, runtime에 해석되고 실행되어 함수의 선언과 초기화만 동시에 처리되고 할당은 되지 않는다.
        이같은 특성으로, Javascript에서 함수를 선언 할 때는 Function expression방식으로 선언하는 것을 권장한다.
        또한 Function declaration 방식으로 함수를 정의하면 사용하기엔 쉽지만, 규모가 큰 Application을 개발하는 경우 인터프리터가 많은 양의 코드를 Variable Object에 할당하므로 Application의 응답속도가 현저히 떨어지는 경우가 발생 할 수 있기에 주의해야 한다.

## First-class object
- First-class object란 생성, 대입, 연산, 인자 또는 반환값으로서의 전달 등의 프로그래밍 언어의 기본조작을 제한 없이 사용할 수 있는 object를 의미한다.
First-class object는 다음의 조건을 만족시킬 때 인정된다.
    * 무명의 리터럴로 표현 가능
    * 변수나 자료구조(object, array)에 할당 가능
    * 함수의 parameter로 전달 가능
    * return 값으로 사용 가능

## Parameter & Arguments
- 함수 내에서 Parameter는 변수와 동일하게 메모리 공간을 확보하며 동작한다. 전달된 Arguments는 Parameter에 할당되며, 할당 되지 않은 Parameter는 undefined로 초기화된다.
``` javascript
var tmp = function(t1,t2) {
    console.log(t1, t2);
    };
    tmp(1); // 1 undefined
```

## Callback Function
- Callback Function은 명시적으로 호출하는 함수가 아닌, 특정 상황이 발생했을 때 시스템에 의해 호출되는 함수이다.
대표적으로 이벤트 핸들러 처리에 자주 사용된다.
``` html
<!Doctype html>
<html>
<body>
    <button id = "testButton">Click!</button>
    <script>
        var button = document.getElementById('testButton");
        button.addEventListener('click', function() {
            console.log('Clicked!');
        });
    </script>
</body>
</html>
```
- Callback Function은 주로 비동기식 처리모델(Asynchronous processing model)에 사용된다.
비동기식 처리모델이란 처리가 종료되면 호출될 함수(Callback Function)을 미리 Parameter에 전달하고 처리가 종료되면 호출하는 것이다.
- Callback Function은 Callback queue에 들어가 있다가 해당 이벤트가 발생하면 호출되며 closure라 Queue에 단독으로 존재하다 호출되어도 Callback Function을 전달받은 함수의 변수에 접근할 수 있다.

## Prototype Object
- Javascript의 모든 Object는 자신의 Prototype을 가리키는 [[Prototype]]이라는 property를 가진다.
여기서 자신의 Prototype이란 사실상 클래스 기반 언어들에서 말하는 '부모 클래스'와 유사하다고 생각하면 된다.
브라우저 Chrome, Firefox 등에서는 이 property를 \__proto__\라고 명명하였기 때문에 [[Prototype]]과 \__proto__\는 같은 property이다.

``` javascript
var paerson = {
    name: 'John';
    nation: 'USA';
}
console.log(person.\__proto__\ === Object.prototype); // true
```

## 함수의 Prototype
- Javascript에서 함수는 객체이기 때문에 함수 역시 [[Prototype]] property를 가진다.
그런데, 함수는 일반 객체와 달리 prototype property라는것도 소유하게 된다.
prototype property는 함수 객체가 생성자로 생성될 때, 이 객체의 부모 역할을 하는 객체를 가리킨다.

- 함수의 [[Prototype]] property는 Object.prototype 객체를 가리키지 않고, Function.prototype을 가리킨다.
이유는 사실 Javascript에서 함수나 객체를 생성할 때, 생성된 객체(함수를 포함)의 종점이 Object.prototype이라는 Built-in Object인데, 객체는 Prototype-chain에서 생성된 객체의[[Prototype]]이 바로 Object.prototype을 가리키는 반면, 함수는 중간 단계에 FunctionName.prototype이라는 객체가 하나 더 생성되기 때문에 new 명령어로 생성된 객체의[[Prototype]]이 가리키는 객체가 FunctionName.prototype이기 때문이다.

## Prototype-chain
- Class가 없는 ES5에서 Class와 같은 상속을 구현하는 방법이다.
생성자 함수로 생성된 객체에 해당 Property가 없으면 그 객체의 부모 객체((?).prototype)에서 해당 Property를 찾는다.
(?).prototype 객체는 자동으로 생성되는 숨겨진 객체이지만, 임의로 수정이 가능하기 때문에 Class와 같은 상속을 구현 할 수 있다.
``` javascript
function Person(name) {
    this.name = name;
}
Person.prototype.gender = 'male';

var foo = new Person('Kim');
var bar = new Person('Baek');

console.log(foo.gender); // male
console.log(bar.gender); // male
// foo, bar object에 gender property가 없으면 동적 추가

foo.gender = 'female'; // foo object에 gender property가 있으면 해당 property에 값 할당
console.log(foo.gender); // female
console.log(bar.gender); // male
```

## Javascript의 Scope
- Javascript에서는 함수 내에 있는 변수가 아닌 변수들을 모두 전역 변수로 간주한다.
전역 변수의 [[Prototype]]은 전역 객체(Window object)이다.
즉, 변수는 기본적으로 코드 내 어디에서든 참조 할 수 있는 전역 Scope를 가진다.
전역 변수는 설계상 프로그램이 종료 될 때 까지 Garbage collection이 되지 않기 때문에, 프로그램을 계속 실행 시켜둘 시 큰 성능 저하를 야기한다.
이 때문에, Javascript에서 코드를 작성할 시 익명함수를 만들고, 모든 코드를 익명함수 안에 작성하는걸 권장한다.
이렇게 되면 모든 변수가 지역변수가 되기 때문에, System에서 Garbage collection을 자동으로 처리해주어, 프로그램을 계속 실행 하여도 성능 저하를 어느정도 방지 할 수 있다. (ECMAScript 6부터는 let이라는 새로운 방식의 변수 선언으로 block-level scope를 구현 할 수 있다.)

``` javascript
var x = 'global';

function foo() {
  var x = 'local';
  console.log(x); // local

  function bar() {
    console.log(x); // local
  }

  bar();
}
foo();
console.log(x); // global
```

## 암묵적 전역(implied globals)
Javascript에서는 함수 내에 변수 선언을 할 때라도, 'var'이라는 변수 선언문이 없으면 해당 변수를 전역 변수로 생성한다.
``` javascript
function test() {
    x = 1;
    var y = 5;
}

test();

console.log(x); // 1
console.log(y); // ReferenceError: y is not defined
```

## this
- 'this'는 새로운 object를 생성할때 기존 객체의 속성값을 재사용 하게 해주는 역할을 한다.
``` javascript

var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

user1 = new Person('Jason', '18');
console.log(user1.name, user1.age); // jason, 18
```
- 그런데, Javascript의 this는 기본적으로 전역객체 global에 바인딩 되고, 이는 전역 함수 내부에 선언된 this, 내부 함수에 선언된 this 역시 마찬가지다.
이러한 전역객체로 바인딩 되는것을 방지하기 위해 여러 호출 패턴이 있다.
(일반 함수의 호출 시엔 this가 전역객체에 바인딩되고, 생성자 함수를 호출 할 경우 this는 생성자 함수가 생성할 객체에 바인딩 된다.)
``` javascript
// method invocation pattern
var obj = {
    name: 'Jason',
    sayName: function() {
        console.log(this.name);
    }
}

var obj_2 = {
    name: 'John'
}

obj_2.sayName = obj.sayName;
obj.sayName();
obj_2.sayName();
```
- 다음과 같이 생성자 함수를 호출할 때 new 명령어를 붙이지 않으면 this가 전역객체에 바인딩 되기 때문에 undefined가 표시된다.
```javascript
var Person = function(name) {
    this.name = name;
}

var you = Person('John');
var me = new Person('Jason');

console.log(you); // undefined
console.log(me); // Jason
```
