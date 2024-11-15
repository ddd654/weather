const name2 = "chris";
const age2 = 44;

function print(name, age) {
  console.log(name);
  console.log(age);
}
print(name2, age2);

// 1. 속성
console.log("------");

function print2(person) {
  console.log(person.name);
  console.log(person.color);
}

const fruit = { name: "apple", color: "red" };
print2(fruit);

fruit.hasJob = true;
console.log(fruit.hasJob);

delete fruit.hasJob;
console.log(fruit.hasJob);

// 2. computed properties
console.log(fruit.name); // dot으로 접근
console.log(fruit["name"]); // 이게 2. , string

fruit["hasJob"] = true;
console.log(fruit.hasJob);

function printValue(obj, key) {
  console.log(obj, key);
}
printValue(fruit, "name");
printValue(fruit, "color");

// 3.
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("필요한 이름1", "필요한 나이~");
console.log(person4.age);

// 4. Constructor function
function Person(name, age) {
  //오브젝트 리턴 함수는 대문자
  // object를 만들고 리턴해주면
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

// 5. in operator, 존재여부 check
console.log("name" in fruit, "name의 값");
console.log("color" in fruit);
console.log("run" in fruit);

// 6. for..in, for..of
console.clear();

for (key in fruit) {
  console.log(key);
}

//for..of
const array = [1, 2, 4, 7];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (value of array) {
  console.log(value);
}

// 7. cloning

const user = { name: "chris", age: 22 };
const user2 = user;
user2.name = "coco";
console.log(user);

const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user4);
console.log(user4);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);


class Computer{
  constructor(){
    
  }
}









