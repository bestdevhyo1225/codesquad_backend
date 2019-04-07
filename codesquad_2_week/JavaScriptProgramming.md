# JavaScript Programming

> ### 유효범위(Scope)란 ?
---
* 어떤 변수에 접근할 수 있는지를 정의
* JavaScript 에서 Scope(유효범위)를 잘 알아야하는 이유는 무엇일까?
    1. 프로그래밍 언어 코드에서 가장 기본적인 개념이기 때문에
    2. 특히 JavaScript 언어는 다른 언어와 Scope(유효범위)의 개념이 다르기 때문에
    
* 유효범위에는 두 가지 유효범위가 존재 한다. 전역 유효 범위 (Global Scope) 와 지역 유효 볌위 (Local Scope) 가 있다.
    * 전역 유효 범위 (Global Scope) - 스크립트 전체에서 참조 되는것을 의미 한다.
    * 지역 유효 범위 (Local Scope) - 정의된 함수 안에서만 참조 되는것을 의미한다.

```javascript
    // ----------- global_scope의 유효범위 ----------- 
    var global_scope = "global";
    function funcA() {
        // ----------- local_scope_a의 유효범위 ----------- 
        var local_scope_a = "a";
        function funcB() {
            var local_scope_b = "b";
            function (){
                var local_scope_c = "c";
            }
        }
        // ----------- local_scope_a의 유효범위 -----------
    }
    // ----------- global_scope의 유효범위 ----------- 
```
---
* JavaScript 유효 범위의 특징
    1. 함수 단위의 유효 범위
    2. 변수명의 중복 허용
    3. var 키워드 생략
    4. 렉시컬 특성

```javascript
    function scopeTest() {
        var a = 0;
        if (true) {
            var b = 0;
            for (var c = 0; c < 5; c++) {
                console.log("c = " + c);
            }
            console.log("c = " + c);
        }
        console.log("b = " + b);
    }
    
    // 실행 결과
    /*
    c = 0
    c = 1
    c = 2
    c = 3
    c = 4
    c = 5
    b = 0
    */
```
* 위의 코드의 핵심은 JavaScript 의 유효 범위 단위가 블록 단위가 아니고 **함수 단위**로 정의된다는 것이다.
* 다른 언어들은 유효범위가 블록 단위이기 때문에 중괄호 범위 밖에서 벗어나면 변수를 사용할 수 없다.
* **JavaScript의 유효범위는 함수 단위**이기 때문에 변수 a, b, c는 모두 같은 유효범위를 갖는다.

```javascript
    var scope = 10;
    function scopeExam() {
        var scope = 20;
        console.log("scope = " + scope);
    }
    scopeExam();
    
    // 실행 결과
    /*
    scope = 20
    */
```
* JavaScript 는 다른 언어와 달리 **변수명이 중복되어도 에러가 나지 않는다.**
* 같은 변수명이 여러 개가 있는 변수를 참조할 때 **가장 가까운 범위의 변수**를 참조한다.
* 전역 변수 scope를 참조하는 것이 아니라 **같은 함수내에 있는 지역 변수 scope**를 참조합니다.

```javascript
    function scopeExam() {
        scope = 20;
        console.log("scope = " + scope);
    }
    
    function scopeExam2() {
        console.log("scope = " + scope);
    }
    
    scopeExam();
    scopeExam2();
    
    // 실행 결과 
    /*
    scope = 20
    scope = 20
    */
```
* JavaScript 는 var 키워드를 생략하는것이 가능하다.
* 단, var 키워드를 빼먹고 변수를 선언할 경우 **전역 변수**로 선언 된다.

```javascript          |
                     |
```
* **렉시컬 특성**이란 함수 실행시 유효 범위를 함수 실행 환경이 아닌 **함수 정의 환경**으로 참조하는 특성

> ### 유효범위 체인 (Scope Chain)
---
