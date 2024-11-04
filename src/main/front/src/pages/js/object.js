// const name = 'chris';
// const age = 44;
// print(name, age);

const obj1 = {};
const obj2 = new Object(); // object constructor가 호출되서 

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const chris = { name: 'chris', age: 44 };
print(chris);

chris.hasJob = true;
console.log(chris.hasJob); //동적

delete chris.hasJob;

// 2. 계산된 properties
console.log(chris.name);
console.log(chris['name']); //배열식 접근

chris['hasJob'] = true;
console.log(chris.hasJob);

function printValue(obj, key){
  console.log(obj[key]);
  
}
printValue(chris, 'name');

// 3. Property  값 넣기
const person1 = {name:'bob', age: 33};
const person2 = {name:'steve', age: 22};
const person3 = {name:'chris', age: 44};
const person4 = makePerson("coco", 444);
const person5 = new Person("chris", 33);
console.log(person4);


function makePerson(name, age){
  return{
    name: name,
    age: age,
  };
}
function Person(name, age){
  this.name = name;
  this.age = age;
}

// 5. in 으로 object 안에 있는지 확인
console.log('name' in chris); 

// 6. for..in, for..of

console.clear();
for(key in chris){
  console.log(key);
}


const array = [1, 2, 3, 4];
for (value of array){
  console.log(value);
}

// 7. Fun cloning
// Object.assign

const user = {name: "cheis", age: '22'};
const user2 = user;
user2.name = 'new name123';
console.log(user);

//old
const user3 = {};
for(key in user){
  user3[key] = user[key];
}





