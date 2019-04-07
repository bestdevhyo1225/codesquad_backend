# Array.prototype.forEach()

## 구문
---
> `arr.forEach(callback[, thisArg]);`

#### 매개변수

>#### callback
>각 요소에 대해 실행할 함수이고 세 가지 인수를 받는다.   
> 
>>#### currentValue  
>처리할 현재 요소   
>   
>>#### index (optional)    
>처리할 요소의 인덱스
>    
>>#### array (optional)
>forEach()를 호출한 배열 
>
>#### thisArg  (optional)
>callback 을 실행할 때 this 로 사용할 값

#### 반환 값
> undefined

## 설명
---
>thisArg 매개변수를 forEach()에 제공한 경우 callback을 호출할 때 전달해 this의 값으로 쓰입니다. 전달하지 않으면 undefined를 사용하며, 최종 this 값은 함수의 this를 결정하는 평소 규칙을 따릅니다.

>forEach()로 처리할 요소의 범위는 최초 callback 호출 전에 설정됩니다. forEach() 호출을 시작한 뒤 배열에 추가한 요소는 callback이 방문하지 않습니다. 배열의 기존 요소값이 바뀐 경우, callback에 전달하는 값은 forEach()가 요소를 방문한 시점의 값을 사용합니다. 방문하기 전에 삭제한 요소는 방문하지 않습니다.

>forEach()는 각 배열 요소에 대해 한 번씩 callback 함수를 실행합니다. map()과 reduce()와는 달리 undefined를 반환하기 때문에 메서드 체인의 중간에 사용할 수 없습니다. 대표적인 사용처는 메서드 체인 끝에서 부작용side effect을 실행하는 겁니다.         

## 예제
#### for 반복문을 forEach 로 바꾸기
    const items = ['items1', 'items2', 'items3'];
    const copy = [];

    // 이전
    for (let i= 0; i < items.length; i++) {
        copy.push(items[i]);
    }  

    // 이후
    items.forEach(function(item) {
        copy.push(item);
    });
#### 배열 콘텐츠 출력
    function logArrayElements(element, index, array) {
        console.log('a[' + index + '] = ' + element);
        }

    // 인덱스 2는 배열의 그 위치에 항목이 없기에
    // 건너뜀을 주의하세요.
    [2, 5, , 9].forEach(logArrayElements);
    // 기록:
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9
#### thisArg 사용   
    function Counter() {
        this.sum = 0;
        this.count = 0;
    }

    Counter.prototype.add = function(array) {
        array.forEach(function(entry) {
            this.sum += entry;
            ++this.count;
        }, this);
    };

    var obj = new Counter();
    obj.add([2, 5, 9]);
    obj.count;  // 3
    obj.sum;    // 16`
---

