const myReduce = (arr, callback, initialValue) => {
    let preValue = initialValue;
    for (let i = 0; i < arr.length; i++) {
        if (preValue === undefined) preValue = arr[i++];
        preValue = callback(preValue, arr[i], i);
    }
    return preValue;
}

// test1 -> 모든 합
const input = [9, 2, 8, 5, 7];
const result = myReduce( input, (pre, val, i) => {
    console.log(`index = ${i}`);
    return pre + val;
}, );
console.log(result); // 31

// test2 -> 문자열의 길이 모으기
const input2 = ['foo', 'hello', 'diamond', 'A'];
const result2 = myReduce( input2, (pre, cur) => {
    pre.push(cur.length);
    return pre;
}, [] );
console.log(result2)    // [ 3, 5, 7, 1 ]

// test 3 -> 5의 배수인 정수만 모으기
const input3 = [4, 15, 377, 395, 400, 1024, 3000];
const result3 = myReduce( input3, (pre, cur) => {
    if (cur % 5 === 0) pre.push(cur);
    return pre;
}, [] );
console.log(result3); // [ 15, 395, 400, 3000 ]

// test 4 -> 객체의 속성을 이용하여 값 모두 더하기
const obj = { apple: 500, grape: 2000, berry: 30, };
const result4 = myReduce( Object.keys(obj), (pre, cur) => {
    return pre + obj[cur];
}, 0 );
console.log(result4);   // 2530