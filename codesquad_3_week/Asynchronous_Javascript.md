##Javascript - Call Stack, Task Queue, Event Loop

---

> ### Javascript Engine

* Javascript 로 작성한 코드를 해석하고 실행하는 **인터프리터** 이다.

* 주로 웹 브라우저에서 이용되지만 최근에는 node.js 가 등장하면서 server side 에선 V8 과 같은 Engine 이 이용 된다.

* 구글에서 개발한 V8 을 비롯해 자바스크립트 엔진은 크게 3가지 영역으로 나뉜다.

  * **Call Stack**

  * **Task Queue ( Event Queue )**
  * **Heap**

* 추가적으로 **Event Loop** 가 존재하여 Task Queue 와 Call Stack 을 주시하며 관리하게 된다.

![그림](http://prashantb.me/content/images/2017/01/js_runtime.png)

> ### Call Stack

* 자바스크립트는 **단 하나의 호출 스택** 을 사용한다.

* 이러한 특징 때문에 자바스크립트의 함수가 실행되는 방식을 **"Run to Completion"** 이라고 한다.

* **Run to Completion ?** 하나의 함수가 실행되면 종료되기전 까지 어떤 task 도 수행할 수 없음을 의미

  ```javascript
  function f1() {
    console.log(`f1`);
  }
  
  function f2() {
    console.log(`f2`);
    f1();
  }
  
  function f3() {
    console.log(`f3`);
    f2();
  }
  
  f3();	// 호출 했을때 call stack 에는 어떠한 일이 생길까?
  ```


> ### Task Queue ( Event Queue )

* 자바스크립트 런타임 환경에서  처리해야 하는 Task 들을 임시 저장하는 대기 큐가 존재한다.

* Call Stack 이 비어졌을때 먼저 대기열에 들어온 순서대로 처리 한다.

  ```javascript
  setTimeout( () => {
  	console.log(`first`);
  }, 0 );
  console.log(`second`);
  // 다음 비동기 코드는 어떻게 실행될까?
  ```

* Call Stack 에 쌓여 바로 실행될 것 같지만 그렇지 않다.

* 자바스크립트에서는 이벤트에 의해 실행되는 함수(핸들러)들이 비동기로 실행 된다.

* 자바스크립트 엔진이 아닌 **Web API 영역** 에 따로 정의되어 있는 함수들은 비동기로 실행 된다.

  ```javascript
  function test1() {
    console.log(`test1`);
    test2();
  }
  
  function test2() {
    let timer = setTimeout( () => {
      console.log(`test2`);
    }, 0 );
    test3();
  }
  
  function test3() {
    console.log(`test3`);
  }
  
  test1();	// 결과가 무엇이 나올까????
  ```

  1. test1 함수가 call stack 에 쌓인다.
  2. console.log('test1'`) 함수가 Call Stack 에 쌓인다. 
  3. 'test1' 결과를 출력한다. 
  4. console.log('test1') 함수는 Call Stack 에서 pop 이 된다.
  5. test1 함수는 Call Stack 에서 pop 이 된다.
  6. test2 함수가 Call Stack 에 쌓인다.
  7. setTimeout 함수는 이벤트 함수이다. 따라서 익명함수가 Web API 영역으로 넘어가고 0 ms 동안 대기 한다.
  8. Web API 영역에서 Task Queue 로 넘어가는 동시에 test3 함수가 Call Stack 에 쌓인다.
  9. console.log('test3') 함수가 Call Stack 에 쌓인다.
  10. 'test3' 결과를 출력한다.
  11. console.log('test3') 함수가 Call Stack 에서 pop 이 된다.
  12. test3 함수가 Call Stack 에서 Pop 이 된다.
  13. **(중요) Event Loop 가 Call Stack 과 Task Queue 를 주시하며 Call Stack 이 비어 있으면 Task Queue 에서 대기하는 익명 함수를 Call Stack 에 쌓는다.**
  14. console.log('test2') 함수가  Call Stack 에 쌓인다.
  15. 'test2' 결과를 출력한다.
  16. console.log('test2') 함수가  Call Stack 에서 pop 이 된다.
  17. 익명 함수가 Call Stack 에서 pop 이 된다.

> ### Event Loop

* 위의 코드를 해석하면서 Call Stack 과 Task Queue 에서 작업을 할 때 **Event Loop** 가 나온다.
* **Event Loop** 는 무엇일까?
  * 브라우저는 단일 스레드 (Single-Thread) 에서 Event-Driven 방식으로 동작한다.
  * 단일 스레드? 스레드가 하나이며, 이말은 곧 **하나의 작업(Task)만을 처리할 수 있음을 의미 한다.**
  * 생각해보면 실제 웹 어플리케이션은 많은 Task 가 동시에 처리되는 것처럼 느껴진다.
  * 왜 그런것일까? 이유는 자바스크립트의 **동시성 (Concurrency)** 을 지원하는 것이 **이벤트 루프 (Event Loop)** 때문이다.
* Event Loop 는 Call Stack 이 현재 실행중인 Task 가 있는지 그리고 Task Queue ( Event Queue ) 에 Task 가 있는지 반복하여 확인한다. 만약 Call Stack 이 비어있다면 Task Queue ( Event Queue ) 내의 Task 를 Call Stack 으로 이동시키는 작업을 한다.

---

> ###참고사이트

* [https://alex-dh.tistory.com/9](https://alex-dh.tistory.com/9)

* [https://asfirstalways.tistory.com/362](https://asfirstalways.tistory.com/362)

  
