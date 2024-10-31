import { list } from "postcss";
import { useEffect } from "react";

function Po() {


  useEffect(() => {
    //DAY 1
    //[11, 22].forEach(alert);

    let message;
    message = "nice";

    //alert(message);

    let fruitName = "apple";
    let color = "red";

    fruitName = "new apple";

    // console.log("let과", fruitName)

    const goodBirthDay = '93.09.09';
    //birthDay = "냠";// const는 일정


    const colorRed = "red";
    const colorblue = "blue";
    const coloryellow = "yellow"; //이렇게 만들고 골라써

    color = coloryellow;

    const pageLoadTime = 11;

    //이름 할당하기
    let admin, name;
    name = "chris";
    admin = name;
    // alert(admin);

    //올바른 이름 선택하기
    const planet = 'earth';
    let currentUserName = "지금이름";

    const birthDay = '11.22.1982';
    // const age = someCode123(birthDay);

    // alert(`벡틱으로 변수와 같이 쓰기 ${birthDay}`);

    //표현식을 문자열 중간에 넣기
    let name1 = "coco";
    // alert(`hello, ${name1}`)

    let nameCheck = true;
    let first = 11;
    let second = 22;
    let isBig = first > second;
    // alert(isBig);

    let name2 = "chris";
    // alert(`hello ${123}`); //number
    // alert(`hello ${"name"}`) // string
    // alert(`hello ${name2}`); //string

    //title = "prompt 함수"
    // result = prompt(title, [123]);

    //let age = prompt('나이를 입력하세요', '');
    // alert(`입력한 나이는 ${age}살 입니다`);

    // Q = "이것이 맞나요?"
    // result = confirm(Q);
    // alert(result);

    // Q1 = "이름이 무엇인가요?"
    // // alert는 알림, prompt는 입력, confirm은 선택
    // result = prompt(Q1, '');
    // alert(result)


    //형 변환
    let value = true;
    // alert(typeof value);
    // value = String(value);
    // alert(typeof value); //string이 된다

    value = Number(value);
    // console.log(value); // 숫자 1이 나온다

    ///////////////

    //DAY 2

    // alert(6 % 4)
    // alert(2 ** 3)

    // alert(2 ** (1/2))


    let apples = "2";
    let bananas = "4";
    // alert( +apples + +bananas );

    // let a =1 , b =1;
    // let c = ++a;
    // let d = b++;

    // console.log(a, b, c, d)


    // let a = +prompt("덧셈할 첫 숫자를 입력해주세요", 1);
    // let b = +prompt("덧셈할 두번째 숫자를 입력해주세요", 2);
    // alert(a + b);

    // console.log(5 > 4)
    // console.log("apple" > "pineapple")
    // console.log("2" > "12")
    // undefined == null true
    // undefined === null false
    // null == "\n0\n" false
    // null == "\n0\n" false

    // let year = prompt("올해 몇년도인가요?", '');
    // if (year == 2024) {
    //   alert("맞아요!")
    // } else{
    //   alert("아니에요")
    // }


    // let accessAllow;
    // let age = prompt("나이를 입력하세요", '');
    // if (age > 18) {
    //   accessAllow = true;
    // } else {
    //   accessAllow = false;
    // }

    // accessAllow = age > 18 ? true : false;


    // if("0"){ //모든 문자열은 true, 빈거빼고
    //   alert("hi")
    // }

    // let answer = prompt("javascript의 줄임말을 써주세요", '');
    // if(answer == "js"){ 
    //   alert("정답이에요")
    // } else{
    //   alert("아니네요")
    // }

    // let value1 = prompt("숫자를 입력하세요", 0);
    // if(value1 > 0){
    //   alert(1);
    // } else if(value1 <0){
    //   alert(-1)
    // } else {
    //   alert(0)
    // }

    // let result = a + b < 4 ? "미만" : "초과";


    // let hour = 12;
    // let isWeekend = true;

    // if( hour < 10 || hour > 18 || isWeekend){
    //   console.log("영업시간이 아닙니다")
    // }

    // let isAccess;
    // let login = prompt("아이디를 입력하세요", '');
    // if (login == "admin") {

    //   let password = prompt("비밀번호를 입력하세요", "");
    //   if (password == 123) {
    //     alert("환영합니다");
    //   } else if (login == '' || login == null) {
    //     alert("취소괴었습니다")
    //   } else {
    //     alert("틀렸습니다")
    //   }

    // } else if (login == '' || login == null) {
    //   alert("취소되었습니다")
    // } else {
    //   alert("잘못 입력하셨습니다")
    // }


    // for (let i =0; i < 4; i++){
    //   console.log("반복", i);
    // }

    // let sum = 0;
    // while (true) {
    //   let value = +prompt("숫자를 입력하세요", '');
    //   if (!value) {
    //     break;
    //   }
    //   sum += value;
    // }

    // alert('합계: ' + sum);


    // for (let i = 0; i < 10; i++){
    //   if( i % 2 ==1){
    //     continue
    //   }
    //   console.log(i);
    // }

    // outer: for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {

    //     let input = prompt(`(${i}, ${j})의 값`, '');

    //     if (!input) {// 입력x, 취소이면
    //       break outer;
    //     }
    //     break;
    //   }
    // }

    // let i = 3;
    // while (i){ //0 이니 false
    //   alert(i--);
    // }

    // let i = 0;
    // while( i++ <5){ //1 2 3 4  
    //   alert(i);
    // }

    // for(let i = 0; i <= 10; i++){
    //   if(i % 2 ==0){

    //   console.log( i)
    //   }
    // }

    // console.log(12321)
    // let i = 0;
    // while(i < 3){
    //   alert(`number ${i}`);
    //   i++; 
    // }

    // let isHundred = prompt("100이 넘는 수를 입력해주세요", '');
    // if (isHundred > 100) {
    // } else {
    //   console.log(isHundred);
    // }


    // let browser = "Chrome"; 
    // if (browser == "Edge") {
    //   alert("Edge를 사용하고 계시네요");

    // } else if (browser == "Chrome"
    //   || browser == "FireFox"
    //   || browser == "Safari"
    //   || browser == "Opera") {
    //   alert("저희 서비스가 지원하는 브라우저를 사용하고 계시네요");
    // } else {
    //   alert("현재 페이지는 어떨련지요")
    // }



    // let fruitName1 = "apple"; 

    // function showMessage(){
    //   let fruitName1 = "banana";

    //   let message = "good, " + fruitName1;
    //   alert(message); 
    //   console.log("하나")
    // } 

    //함수는 내부 변수인 fruitName1만 사용한다
    // showMessage();

    // alert(fruitName1);


    // function showMessage(from, text = "no text given"){
    //   // from = "☆" + from + "★";

    //   alert(from + ': ' + text);
    // }

    // let from = "Chris" //안쪽의 일은 안쪽에서만
    // showMessage(from, "what is today's lunch?");
    // showMessage("Jhon", "I'm thinking out");

    // showMessage("chris");

    // function showMessage1(text){
    //   console.log(text); //undefined가 나온다

    //   if(text == undefined){ //매개변수 생략되었다면
    //     text = "빈 문자열"; //빈 문자열을 넣는다
    //   }
    //   console.log(text);
    //   alert(text); 
    // }

    // showMessage1();

    // function showMessage2(text){
    //   text = text || "빈 문자열";
    //   alert(text);
    // }
    // showMessage2(); 


    // function showCount(count){
    //   alert(count ?? "unknown");

    // }
    // showCount(0);
    // showCount(null);

    // function sum(a, b) {
    //   return a + b;
    // } 
    // let result = sum(2,4);
    // alert(result);

    //-------------------------
    // function checkAge(age){ //18세 넘으면 true 나오는 함수
    //   if(age > 18){
    //     return true;
    //   } else {
    //     return confirm("보호자의 동의를 받으셨나요?"); //이때 확인이면 true 나오고 취소면, false
    //   }
    // }
    // let age = prompt("나이를 알려주세요", 18);
    // if(checkAge(age)){ //true 이면
    //   alert("접속 허용");
    // } else { //false 이면
    //   alert("접속 차단");
    // }
    // function showMovie(age){
    //   if(!checkAge(age)){ //false 지 느낌표는
    //     // alert("시청 불가능");
    //     return;
    //   }
    //   alert("영화 상영");
    // }


    // function doNothing(){
    //   // return이 없든 있든 undefined를 반환한다
    // }
    // alert(doNothing());


    // 소수인지 보여주는 함수
    // function showPrime(n) {
    //   nextPrime: for (let i = 2; i < n; i++) {
    //     for (let j = 2; j < i; j++) {
    //       if (i % j == 0) continue nextPrime;
    //     }
    //     alert(i);
    //     console.log(i);
    //   }
    // }

    //   showPrime(5); 


    //두번째 소수 판별코드
    // function showPrime(n){
    //   for(let i =2; i < n; i++){
    //     if(!isPrime){
    //       continue;
    //     }
    //     alert(i);
    //   }
    // }
    // function isPrime(n){
    //   for(let i = 2; i < n; i++){
    //     if(n% i ==0){
    //       return false;
    //     }
    //     return true;
    //   }

    // }

    // function checkAge(age){
    //   if(age > 18){
    //     return true;
    //   } else {
    //     return confirm("보호자의 동의를 받으셨나요?");
    //   }
    // }

    // let age = prompt("나이를 적어주세요",'');
    // checkAge(age);

    // function checkAge(age){
    //   if(age > 18){
    //     return true;
    //   }

    //   return confirm("보호자의 동의를 받으셨나영?");
    // }


    // function checkAge(age){
    //   if(age > 18){
    //     return true;
    //   } else {
    //     return confirm("보호자의 동의를 받으셨나요?", '');
    //   }
    // }

    // function checkAge2(age){
    //   return age > 18 ? true : confirm("귀찮아", '');
    // }


    // function min(a, b){ //변수 2개
    //   if( a < b){
    //     return a;
    //   } else if(a ==b){
    //     return a;
    //   } else {
    //     return b;
    //   }

    //   // return a < b ? a : b;

    // }

    // function pow(a,b){ //제곱을 해주는 함수 // 4, 4
    //   let sum =0;
    //   for(let i = 0; i < b; i++){ //b 번 반복
    //     sum += a * b;
    //   } 
    //   return sum;
    // }

    // console.log(pow(4,4));


    // function sayFruit1(){
    //   alert("apple");
    // }
    // let sayFruit2 = function(){
    //   alert("banana");
    // }
    // alert(sayFruit1); //함수 코드가 보인다


    // function fruit(){
    //   alert("apple");
    // }

    // let func = fruit;
    // func();
    // fruit();




    // 콜백 함수
    // function ask(question, yes, no){
    //   if(confirm(question)){
    //     yes();
    //   } else {
    //     no();
    //   }
    // }

    // function showOK(){
    //   alert("동의하셨습니다");
    // }

    // function showNo(){
    //   alert("취소하셨습니다");
    // }
    // ask("동의하십니까?", showOK, showNo);

    // //확인은 바나나, 취소는 사과
    // function fruit(question, ok, no){
    //   if(confirm(question)){
    //     ok();
    //   } else{
    //     no();
    //   }
    // }

    // function checkOk(){
    //   alert("확인은 바나나");
    // }
    // function checkNo(){
    //   alert("취소는 사과");
    // }

    // fruit("질문123", checkOk,checkNo);


    ////////////////DAY 3

    // function sayHi() {
    //   alert("hi");
    // }

    // let func = sayHi;

    // func();
    // sayHi();


    // function ask(question, yes, no) {
    //   if (confirm(question)) {
    //     yes();
    //   } else {
    //     no();
    //   }
    // }

    // let agree = function() {alert("동의하셨습니다")}

    // ask("동의하십니까?",
    //   agree,
    //   function () { alert("취소하셨습니다")}
    // );

    // function sum(a, b) {
    //   return a + b; //a 와 b 를 더하고 뱉는 함수
    // }

    // let sum1 = function (x, y) {
    //   return x + y;
    // }

    // sayHello("Mr"); //함수 선언문은 어디든지 접근가능하다
    // function sayHello(name){
    //   alert(`Hello, ${name}`);
    // }

    // // sayHello1("kim"); //함수표현식은 늦게 만들어진다
    // let sayHello1 = function (name){
    //   alert(`Hello, ${name}`);
    // }
    // sayHello1("kim");


    // let func = (arg1, arg2) => expression;
    // let func1 = function (arg1, arg2) {
    //   return expression;
    // }

    // let sum = function (a, b) {
    //   return a + b;
    // }
    // let sum1 = (a, b) => a + b;
    // alert(sum1(2, 3));


    // let double = n => n * 2;
    // let double = function (n) { 
    //   return n * 2;
    // }
    // alert(double(23));


    // let sayFruit3 = () => alert("사과 바나나1");
    // sayFruit3();

    // let sayFruit4 = function(){
    //   return alert("사과 바나나2");
    // }
    // sayFruit4();

    // function sayFruit5(){
    //   return alert("사과 바나나3");
    // }
    // sayFruit5();


    // let age = prompt("나이를 알려주세요", 18);

    // let welcome = (age < 18) ?
    //   () => alert("안뇽") :
    //   () => alert("안녕하세영");

    // welcome();

    // function welcome2() {
    //   if(age < 18){
    //     alert("미성년자");
    //   } else {
    //     alert("성인");
    //   }
    // }
    // welcome2();

    // function ask(question, yes, no) {
    //   if (confirm(question)) {
    //     yes();
    //   } else {
    //     no();
    //   }
    // }

    // ask("동의하시겠습니까?",
    //   function () { alert("동의") },
    //   function () { alert("취소") }
    // );


    // let ask = (question, yes, no) => {
    //   if(confirm(question)){
    //     yes();
    //   } else {
    //     no();
    //   }
    // }
    // ask("동의하시겠습니까?",
    //   () => {alert("동의1")},
    //   () => { alert("취소2") }
    // );

    //recup
    //alert("good"); alert("nice");

    // alert("이 메시지 후 에러발생");
    // [1, 2].forEach(alert);

    // function sum(a, b) {
    //   let result = a + b;
    //   return result;
    // }

    // let sum2 = function (a, b) {
    //   return a + b;
    // }

    // let sum3 = (a, b) => a + b;
    // let sum4 = (a, b) => {
    //   let total = a + b;

    //   return total;
    // }


    ////////////////////////////////


    //객체
    // let user = new Object(); // 객체 생성자
    // let user1 = {}; // 객체 리터럴

    // let user = {
    //   name: "Chris", //이거 한줄이 property
    //   age: 44, //age 키의 값 = 44
    // }

    // alert(user.name + user.age);

    // user.isAdmin = true;
    // alert(user.isAdmin);

    // delete user.age; //age property 삭제

    // let user = {};
    // user["likes birds"] = true;

    // alert(user["likes birds"]);

    // let key = "likes birds";
    // user[key] = true;

    // delete user[key];


    //객체는 중괄호
    // let fruit = {
    //   name: "Chris",
    //   count: 12
    // };

    // console.log(fruit.name + " ~ " + fruit.count);

    // fruit.isSale = true;
    // console.log(fruit.isSale);


    // let fruit = prompt("어떤 과일을 구매하시겠습니까?", 'apple');
    // let bag = {};
    // bag[fruit] = 5;

    // let bag1 = {
    //   [fruit + "Computer"]: 555
    // }
    // console.log(bag1.appleComputer);

    // function makeUser(name, age, count1){
    //   return{
    //     name,
    //     age: age,
    //     count1
    //   };
    // }

    // let user = makeUser("Chris", 44);
    // console.log(user.name);


    // let user = {};
    // alert(user.noSuchProperty === undefined);
    // alert("something" in user);


    // for( key in object){
    // }

    // let user2 = {
    //   name: "Chris",
    //   gender: "man",
    //   isAlive: true
    // }
    // for( let key in user2){
    //   alert(key); //키
    //   alert(user2[key]); //키에 맞는값
    // }

    // let user = new Object(); //객체 생성자
    // let user1 = {
    //   name: "Chris",
    //   age: 44
    // };

    // console.log("이름은", user1.name);


    ///////////////// DAY 4

    // let fruit = new Object();

    // fruit.name = 'apple2';

    // console.log(fruit.name);

    // let user = {};

    // user["문자열로 추가하기"] = "property123";
    // alert(user["문자열로 추가하기"])


    // let fruit123 = new Object();
    // fruit123 = {
    //   name: 'banana',
    //   count: 22,
    // };

    // //키로 값찾기
    // let key = prompt("어떤 값을 찾으시나요?", '');
    // alert(fruit123[key]);


    // let dd = Math.round(100 * (Math.random()));
    // console.log("qwqwd".length);

    // console.log("code".indexOf("d"));


    // function get_fruit(){
    //   return ['apple', 'banana', 'kiwi', "peach"];
    // }

    // let fruit = get_fruit();

    // for( let i = 0; i < fruit.length; i++){
    //   document.write(fruit[i].toUpperCase() + "<br/>");
    // }

    // fruit.push("gold");
    // console.log(fruit[4]);


    // let fruit2 = {
    //   name: "apple",
    //   count: 22,
    //   color: "red",
    //   "문자열": "nice",

    // }

    // fruit2.where = "경북";
    // console.log(fruit2.where);

    // for (let key in fruit2) {
    //   document.write("<li>key: " + key, ", value: " + fruit2[key] + "</li>");
    // }

    let grades = {
      "list": { 'egoing': 11, 'coco': 22, 'banana': 33 },
      'show': function () {
        alert("nice");
        alert(this);
      }
    } 
    grades['show']();


  }, []) //대괄호 넣으면 한번만 실행~~~

  return (
    <div>
      Po 페이지
      <ul>
        <li>12321</li>
      </ul>
    </div>
  )
}

export default Po;

