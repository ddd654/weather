"use strict";

// 1. class
class Person {
  //constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello yo`);
  }
}

const kim = new Person("kim", 44);
console.log(kim.name);
console.log(kim.age);
kim.speak();

// 2. getter setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    //값 설정
    // if(value < 0){
    //   throw Error("age can't be negative");
    // }
    this._age = value < 0 ? 0 : value; // -1로 했지만 0이 나왔다
  }
}

const user1 = new User("chris", "coco", -1); //
console.log(user1.age);

// 3. fields (지원x pass)
class Experiment {
  publicField = 22;
  privateField = 11;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static property

class Article {
  static publisher = "cocoding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher(); //메모리 사용을 줄일 수 있다

// 5. Inheritance
class Shape {
  constructor(width, height, color) {
    //필드 3개
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); //부모의 draw() 함수를 호출 할수도 있다
    console.log("☆"); //오버라이드한 draw()
  }
  getArea() {
    // 삼각형 메소드만 다르게 수정 오버라이드
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle color ${this.color}`;
  }
}

const rectangle = new Rectangle(10, 10, "yellow");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// 이해가 뭘까
// // '구현할기능들을 객체로 만든다'가 중요하다

// class MyLife {
//   constructor(hp, mp) {
//     this.hp = hp;
//     this.mp = mp;
//   }

//   oring() {
//     if (this.hp > 0) {
//       console.log(`hp가 지금 ${this.hp}이다, game over 조심해라`);
//     } else {
//       console.log(`님 hp 지금 ${this.hp}임 ㅅㄱ`);
//     }
//   }

//   mp_oring() {
//     console.log(`내 정신력 지금 ${this.mp}임...`);
//   }
// }

// const chrisStatus =new MyLife(0, 33);
// chrisStatus.oring();



// class youDie{
//   constructor(hp, mp){
//     this.hp =hp;
//     this.mp =mp;
//   }

  


// }










