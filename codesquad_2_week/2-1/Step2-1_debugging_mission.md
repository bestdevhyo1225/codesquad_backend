# JavaScript Step 2-1
* 아래 코드를 해결하는 미션
```javascript
// main.js
const sum = require("util");

function runProgram(arr) {
    const result = sum(arr);
    return `result is ${result}`;
}

const result = runProgram([undefined, 1,2,3,4,5,-1,"3"]);
console.log(result); //result is 14
```
```javascript
// util.js
(function callModuleChecker(){
    result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

module.exports.sum = (arr) => {
    result = result || 0;

    for (const i = 0; i < arr.length; i++) {
        if (typeof arr !== undefined) continue;
        result += arr[i]
    }
    
    return result;
}
```
* 2 가지의 Error Message가 발생했다.
  * TypeError : sum is not a function
  * TypeError : Assignment to constant variable


* TypeError : sum is not a function 발생한 이유는 무엇일까?

  1. main.js 의 sum 변수에 util.js 를 require 하면 **module 객체**를 가져오게 된다.
  2. 그 다음에 runProgram 실행하면 내부에서 sum 에 접근할 때 다음과 같은 문제가 발생한다.

  why ? constant 변수 인 sum은 **객체를 반환**하는데 runProgram 내부에서 sum 을 **함수로 호출**하고 있기 때문에 발생한다.

* TypeError : Assignment to constant variable

  1. util.js 모듈의 sum 함수에서 for 문을 실행할 때 i 변수가 0 에서 1로 증가할 때 문제가 발생한다.

  why ? const 키워드는 **초기화가 한번만 가능하고 더 이상 변경할 수 없는** 키워드이기 때문이다.

  ​	( const 키워드는 리터럴 값의 재할당이 불가능하다. )

  ​	( const 키워드는 선언과 동시에 리터럴 값을 할당해줘야 한다. )

---

* 수정한 코드
```javascript
// main.js
const util = require("./util");

function runProgram(arr) {
const result = util.sum(arr);
return `result is ${result}`;
}

const result = runProgram([undefined, 1,2,3,4,5,-1,"3"]);
console.log(result); //result is 14
```

  ```javascript
// util.js
(function callModuleChecker(){
    result = new Date();
    console.log("WELCOME UTIL MODULE : " + result);
})();

function checkNumber(value) {
    return (typeof value === "number") ? true : false;
}

module.exports.sum = (arr) => {
    result = result && 0;

    for (let i = 0; i < arr.length; i++) {
        if (!checkNumber(arr[i])) continue;
        result += arr[i];
    }

    return result;
}
  ```