'use Strict';
console.log(age);

// 1. variable, rw(read/rwite)
let globalName = "apple";
{
  let name = "coco";
  console.log(name);
  name = "chris";
  console.log(name);
}
console.log(name);
console.log(globalName);

// 2. var ( don't use )
// hoisting ( 선언을 제일 위로 끌어올린다)
{
  age = 55;
  var age;
} // 블럭안에 선언해도 보인다
console.log(age);

// 3. constant, r(read) 읽기만 가능
const appleColor = 'red';

// Immutable
// mutable

// 4. variable types
// primitive
// object
// function

const count = 11;
const size = 12.2;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nan = "not a number";
console.log(infinity);
console.log(negativeInfinity);
console.log(nan);

const bigInt = 999999999999999999999n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = "C";
const chris = "chris";
const greeting = "nice";
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloChris = `hello ${chris}`;
console.log(`value: ${helloChris}, type: ${typeof helloChris}`);

//boolean
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, 고유 식별자가 필요할때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //false
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

console.log("---------------------------")

//object
const coco = { name: 'coco', age: 44 };
coco.age == 33;

// 5. Dynamic typing
let text = "apple";

console.log(text.charAt(0));

text = 1;
console.log(`${text}, ${typeof text}`);

text = '4' + 5;
console.log(text, typeof text);

text = '10' / '2';
console.log(text, typeof text);

// console.log(text.charAt(0)); << 타입스크립트가 나오게 되었다

const fruit = 'apple';
fruit.age = 22;











