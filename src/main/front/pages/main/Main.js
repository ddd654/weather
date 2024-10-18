
import "./Main.css";
import Link from "next/link"; //next.js의 Link compo
import { useEffect, useState } from "react";
import axios from "axios";


function Main() {
  const [hello, setHello] = useState('');

  useEffect(() => {
    // API 요청
    axios.get('/api/hello')
      .then(response => {
        setHello(response.data);
        // setIsLoading(false);
      })
      .catch(error => console.log(error));

  }, []);


  // 처음 페이지
  return (

    <div>

      백 데이터 받기 : {hello}
      <hr />

      메인 페이지 입니다<br></br>

      여기에 메뉴

      {/* 라우터: URL을 관리하고 어떤 컴포넌트를 렌더링할지를 결정.
      링크: 사용자가 클릭하여 다른 경로로 이동할 수 있도록 도와 */}

      {/* 어떤 태그를 클릭해서 다른 페이지로 넘어갈 때 함수를 동작시키지 않고 
      그냥 페이지를 보여주면 되는 경우에는 Link 사용하는 게 훨씬 효율적이다. */}

      {/* <Link href="/경로">텍스트</Link> */}

      {/* 페이지 소개, 요약, 제목, 로고 등 */}
      <header className="single-day-regular">
        <nav className="weatherMenu">
          <ul className="">
            
            <li><Link href="/weather/WeatherHome">weather home</Link></li>
            <li><Link href="/weather/WeatherMain">메인</Link></li>
            <li>메뉴1</li>
            <li>메뉴2</li>
            <li>메뉴3</li>
            <li><Link href='/page'>테스트~</Link></li>

          </ul>
        </nav>
      </header>




      {/* body의 핵심내용, 핵심주제 / 확장하는 콘텐츠 */}
      <main></main>

      {/* 페이지 안에 독립적 구획 */}
      <section>
        {/* 문서, 페이지 안에 독립적 구획 */}
        <article></article>
      </section>

      {/* 간접 컨텐츠 */}
      <aside></aside>

      {/* 개인정보 처리방침, 저작권, 이름 등등 */}
      <footer></footer>

    </div>

  );

}


export default Main;

