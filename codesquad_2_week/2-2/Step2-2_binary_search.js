(function(){
    const arr = [12, 25, 46, 48, 65, 69, 78, 82, 85, 96];
    const findValue = 25;
    let findIndex = -1;
    let left  = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);
        if (findValue > arr[mid]) {
            left = mid + 1;
        } else if (findValue < arr[mid]) {
            right = mid - 1;
        } else {    // findValue === arr[mid]
            findIndex = mid;
            break;
        }
    }
    console.log((findIndex == -1) ? -1 : arr[findIndex]);
})();

const arr2 = [12, 25, 46, 48, 65, 69, 78, 82, 85, 96];
function binarySearchRecursive(left, right, findValue) {
    if (left <= right) {
        let mid = parseInt(left + (right - left) / 2);
        if (findValue > arr2[mid]) {
            return binarySearchRecursive(mid+1, right, findValue);
        } else if (findValue < arr2[mid]) {
            return binarySearchRecursive(left, mid-1, findValue);
        } else {    // findValue === arr[mid]
            return arr2[mid];
        }
    }
    return -1;
}
console.log(binarySearchRecursive(0, arr2.length-1, 69));