// 1task
const arr = ['a', 'b', 'c', 'd']
const result = arr[0]+ `+` + arr[1] + `,` + arr[2] + `+` + arr[3];
console.log(result);
// 2task
const arr2 = [2, 5, 3, 9];
const result2 = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result2);
// 3task
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const arr3New = arr3.flat();
console.log(arr3New[3]);
// 4task
const arr4 = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
const result4 = arr4.js.splice(0, 1);
console.log(result4);
// 5task
let arr5 = [];
let str = 'x';
for (let i = 0; i < 5; i++) {
	arr5.push(str);
	str += 'x';
}
console.log(arr5);

// 6task
const arr6 = [];
for (let i = 1; i <= 10; i++) {
    let str6 = '';
    for (let j = 0; j < i; j++){
        str6 += i;
    }
	arr6.push(str6);
}
console.log(arr6);
// 7task
function arrayFill(item, count) {
    let arr7 = [];
    for (let i = 0; i < count; i++){
        arr7.push(item);

    }
    return arr7;
}
console.log(arrayFill('x', 5));
// 8task
const arr8 = [3, 2, 3, 3, 4, 3];
function countArr(array) {
    let sum = 0;
    for (let i = 0; i <= array.length-1; i++){
        sum += array[i];
        if (sum > 10) {
            return i + 1;
        }
    }
}
console.log(countArr(arr8));
//9
const arr9 = [1, 2, 3, 4, 5];
function reverseArr(array) {
    let arr9Rev = [];
    for (let i = array.length-1; i >= 0; i--){
        arr9Rev.push(array[i]);
    }
    return arr9Rev;
}
console.log(reverseArr(arr9));
//10
const arr10 = [[1, 2, 3], [4, 5], [6]];
function sumArray(array) {
    let sum = 0;
    array = array.flat();
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sumArray(arr10));
//11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
function sumArr(array) {
    let sum = 0;
    array = array.flat(Infinity);
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(sumArr(arr11));