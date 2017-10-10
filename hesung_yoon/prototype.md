
# 프로토타입 (Prototype)
- 자바스크립트는 포로토타입 기반 객체지향 프로그래밍 언어이다.
- 자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 
- 프로퍼티(프로토타입)은 부모 역할을 담당한다. 
- ECMAscript 에서는 자바스크립트의 모든 객체는 자신의 프로토타입을 
가리킨다. 
- [[Prototype]]이라는 숨겨진 프로퍼티를 가진다. 
- 객체는 __proto__ 프로퍼티로 자신의 부모 객체인 Object.prototype을
가리키고 있다.
- 객체를 생성할 때 프로토타입은 결정된다.
- 결정된 프로토타입 객체는 다른 임의의 객체로 변경할 수 있다.

```
var student = {
 name : 'Lee',
 score : 90
}

console.log(student.hasOwnProperty('name')) //true
```

1. [[Prototype]] 프로퍼티와 prototype 프로퍼티
- [[Prototype]] 프로퍼티는 자신의 프로토타입 객체를 가리키는 숨겨진 프로퍼티이다.
- 함수도 객체이므로 [[Prototype]] 프로퍼티를 갖는다.
- 함수를 포함한 모든 객체가 가지고 있는 프로퍼티이다.

```
//프로토타입
console.log(functionName.__proto__ === Function.prototype)
```

2. Constructor 프로퍼티
- constructor 프로퍼티는 객체의 입장에서 자신을 생성한 객체를 가리킨다.

```
function Person(name){
  this.name = name;
}

var foo = new Person('Lee');
//foo는 Person()생성자 함수에 의해 생성된 객체.
//constructor 프로퍼티는 function Person이다.
```

3. Prototype chain
- 프로토타입 체인이란, 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면, 링크를 따라 자신의 
부모 역할을 하는 프로토타입 객체를 차례대로 검색한다.


```
 var student = {
  name: 'Lee';
  score:90
 }

console.log(stdent.hasOwnProperty('name'));
```

4. 객체 리터럴 방식으로 생성된 객체의 프로토타입 체인
- 객체 리터럴을 사용하여 객체를 생성한 경우, 그 객체의 프로토타입 객체는 Object.prototype이다.
- [[Prototype]] 객체의 입장에서 자신의 부모 역할을 하는 프로토타입 객체를 가리킨다.


5. 생성자 함수로 생성된 객체의 프로토타입 체인
- 객체의 프로토타입 객체(functionName.prototype)와 생성자 함수의 프로토타입 
객체인 Function.prototype의 프로토타입 객체는 Object.prototype객체이다.

6. 프로토타입 객체의 확장
- 프로토타입 객체도 객체이므로 일반 객체와 같이 프로퍼티를 추가/삭제 할 수 있다.
- 추가/삭제된 프로퍼티는 즉시 프로토타입 체인에 반영된다.
- 생성자 함수는 프로토타입 객체를 갖는다. (functionName.prototype)
- 이 프로토타입객체에 메소드를 추가하면 프로토타입 체인에 반영된다.

7. 기본자료형(Primitive data type)의 확장
- 기본자료형(number, boolean, null, undefined)을 제외한 모든것은 객체이다.
- 프로토타입 객체인 String.prototype, Number.prototype, Array.prototype에
메소드를 추가하면 기본자료형 객체는 메소드를 사용할 수 있다.

8. 프로토타입 객체의 변경
- 프로토타입을 동적으로 변경할 수 있다.

9. 프로토타입 체인 동작 조건
- 객체의 프로퍼티를 참조하는 경우, 해당 객체에 프로퍼티가 없는 경우, 프로토타입 체인이 동작한다.
