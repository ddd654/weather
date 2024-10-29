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


    function min(a, b){ //변수 2개
      if( a < b){
        return a;
      } else if(a ==b){
        return a;
      } else {
        return b;
      }

      // return a < b ? a : b;

    }

    function pow(a,b){ //제곱을 해주는 함수 // 4, 4
      let sum =0;
      for(let i = 0; i < b; i++){ //b 번 반복
        sum += a * b;
      } 
      return sum;
    }

    console.log(pow(4,4));















  }, []) //대괄호 넣으면 한번만 실행~~~

  return (
    <div>Po 페이지</div>
  )
}

export default Po;

