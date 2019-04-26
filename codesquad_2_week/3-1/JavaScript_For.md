# JavaScript Programming

> ### forEach 반복문

* 오직 Array 객체에서만 사용 가능한 메서드이다. 배열의 요소들을 반복하여 작업을 수행할 수 있다.

  ```javascript
  const items = ['item1', 'item2', 'item3'];
  
  items.forEach(function(item){
      console.log(item);  // item1, item2, item3
  });
  ```

---

> ### for …in 반복문

* 객체의 속성들을 반복하여 작업을 수행할 수 있다. ( 모든 객체에서 사용이 가능하다. )

* 객체의 Key 값에는 접근할 수 있지만 Value 값에 접근하는 방법은 제공하고 있지 않다.  

  ```javascript
  const obj = {
      a: 1,
      b: 2,
      c: 3,
  };
  
  for (let prop in obj) {
      console.log(`Key : ${prop}, Value : ${obj[prop]}`);
  }
  ```

* prop 라는 변수가 Key 값을 가지게 되고 prop 변수로 obj의 Value 값을 가져올 수 있다.

---

> ### for …of 반복문

* 컬렉션 객체가 [ Symbol.iterator ] 속성을 가지고 있어야만 한다. ( 직접 명시 가능 )

```javascript
const iterable = [10, 20, 30];

for (let value of iterable) {
    console.log(value); // 10, 20, 30
}
```

---

> ### for …in 과 for …of 의 차이점

* for ...in 반복문 -> 객체의 모든 열거 가능한 속성에 대해 반복
* for …of 반복문 -> [ Symbol.iterator ] 속성을 가지는 컬렉션 전용

```javascript
Object.prototype.objCustom = function () {}
Array.prototype.arrCustom = function () {}

const iterable = [3, 5, 7];
iterable.foo = "hello";

for (let key in iterable) {
    console.log(key);   // 0, 1, 2, "foo", "objCustom", "arrCustom"
}

for (let value of iterable) {
    console.log(value); // 3, 5, 7
}
```

---

## 참고 사이트

[자바스크립트 for in vs for of 반복문 정리](https://jsdev.kr/t/for-in-vs-for-of/2938)

