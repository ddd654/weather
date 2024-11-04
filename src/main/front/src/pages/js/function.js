
// 1. function
// function name(param, param2){ body... return;}
// naming: doSomething, verb...
// function is object

function pringHello() {
  console.log("hello");
}
pringHello();

function log(message) {
  console.log(message);
}
log(`hello123`);
log(1234)

// 2.Parameters
// premitive
// object
function changeName(obj) {
  obj.name = "coder";
}

const coco = { name: 'coco' };
changeName(coco);
console.log(coco);

// 3. Default patameters
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage("nice",);

// 4. Rest parameters
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg)
  }

  args.forEach((arg) => console.log(arg));

}
printAll('apple', 'banana');

// 5. local scope
let globalMessage = "global"; //global var
function printMessage() {
  let message = "coco";
  console.log(message); //local var
  console.log(globalMessage);
}
printMessage();


sum(2, 3); //함수가 선언되기 이전에 호출이 가능하다 = hoisting

// 6. Return a value
function sum(a, b) {
  return a + b;
}

// 7. Early return
function upgradeUser(user) {
  if (user.point > 10) {
    //~~~~
  }
}

//good
function upgradeUser(user) {
  if (user.point > 10) {
    // early return
    return;
  }
  // rest logic....~~~
}

// function expression

const print2 = function name123() { //이름이있는 name function
  console.log('print');

}
const print = function () { //이름이 없는 anonymous function
  console.log('print');
}
print();

const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(2, 5));


// 2. Callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer == "love you") {
    printYes();
  } else {
    printNo();
  }
}

const printYes = function () { //anonymous function
  console.log('yes');
}
const printNo = function print() {
  console.log('No');
  // print(); //계산용 자기자신 요청
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// anonymous function
const simplePrint = function () {
  console.log('simple');
}

const simplePrint2 = () => console.log('simple2');
const add = function (a, b) {
  return a + b;
}
const add2 = (a, b) => a + b;

// IIFE
(function hello() {
  console.log('IIFE');

})(); //바로 함수 호출하는법

//calculator
function add(a, b) {
  return a + b;
}
function substract(a, b) { 
  return a - b;
}
const divide2 = (a, b) => { 
  return a / b; 
}
function multiply(a, b) {
  return a * b;
}
function remainder(a, b) {
  return a % b;
}



