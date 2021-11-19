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
let arr6 = [];
for (let i = 1; i <= 10; i++) {
    let str6 = '';
    for (let j = 0; j < i; j++){
        str6 += i;
    }
	arr6.push(str6);
}
console.log(arr6);




