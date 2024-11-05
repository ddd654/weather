
'use strict';

//Array
// 1.

const arr1 = new Array();
const arr2 = [1111, 2];
console.log(arr2[0]);

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

console.log('마지막', fruits[fruits.length - 1]);

// 3. loop

console.clear();
// for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//for of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit, index) => {
  console.log(fruit, "냠", index);

});

fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
})

console.clear();
// 4. addtion, deletion, copy

fruits.push('strawberry', 'tomato');
console.log(fruits);

fruits.pop();
console.log(fruits);

// unshift
fruits.unshift("kiwi");
console.log(fruits); //앞 추가

// shift
fruits.shift();
console.log(fruits); //앞 삭제

//unshift와 shift는 느리다

fruits.push('lemon');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "추가한거", '추가2');
console.log(fruits);

//배열 합치기
const fruits2 = ['mango', 'orange'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


//
console.clear();
console.log(fruits);
console.log(fruits.indexOf('lemon'));
console.log(fruits.includes('apple')); // true
console.log(fruits.includes('coconut')); //false

// lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.lastIndexOf('lemon')); // 없으면 -1 있으면 그 위치

//이모지 윈도우 윈 + ;


















