// 1. String concatenation
console.log("my" + " life");
console.log("1" + 3);

console.log(`1 + 2 = ${1 + 2}`);

console.log("coco \n apple");

// 2.
console.log(1 + 2);
console.log(1 - 2);
console.log(1 / 2);
console.log(1 * 2);
console.log(1 % 2);
console.log(2 ** 3);

// 3. 
let counter = 2;
const preIncre = ++counter;
// counter = counter +1; 카운터도 올라간다
// preIncrement = counter;
console.log(`preIncrement: ${preIncre}, counter: ${counter}`)

const postIncrement = counter++;
// postIncrement =counter;
// counter = counter +1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`)

// 4. assignment operators
let x = 33;
let y = 44;
x += y;
x -= y;

// 5. Compatison oper
console.log(11 > 2); // true

// 6. Logical oper || && !
const value1 = false;
const value2 = 4 < 2;

// ||
console.log(`or: ${value1 || value2 || check()}`);

// &&
console.log(`or: ${value1 && value2 && check()}`);

//null  //null객체가 null 이 아닐때 something 값을 받는다
// if(nullableObject != null){
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //
    console.log("ㄴㄴ");

  }
  return true;
}

// ! not
console.log(!true);

console.log("------------");

// 7. Equality
const stirngFive = '5';
const numberFive = 5;

console.log(stirngFive == numberFive);
console.log(stirngFive === numberFive);

const fruit1 = { name: 'apple' };
const fruit2 = { name: 'apple' };
const fruit3 = fruit1;
console.log(fruit1 == fruit2); //f
console.log(fruit1 === fruit2); //f
console.log(fruit1 === fruit3); //t

//
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. 
const name = "chris";
if (name === "chris") {
  console.log(`hello, ${name}`);
} else if (name === 'code') {
  console.log("nice");

} else {
  console.log("unknown");

}

// 9. ternary operator
// condition ? true : false;

// 10. switch
const browser = "IE";
switch (browser) {
  case 'IE':
    console.log("hi");

  case 'chrome':
  case 'fireFox':
    console.log("hello");

}

// 11. loops
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while: ${i}`); //블럭을 먼저 실행하고프면 do while
  i--
} while (i > 0);

// for
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline var for: ${i}`);
}

for( let i = 0; i< 10; i++){
  for(let j =0; j < 10; j++){
    console.log((`i value: ${i}, j value: ${j}`));
    
  }
}

// Q1
for(let i = 0; i <=10; i++){
  if(i % 2 ==1 ){
    continue;
  }
  console.log(`Q1: ${i}`);
}

// Q2
while(i < 10){
  if(i > 8){
    break;
  }
  console.log(`Q2: ${i}`);
  i++;
}


