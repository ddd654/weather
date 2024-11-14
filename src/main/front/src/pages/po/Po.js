import Link from "next/link";
import { list } from "postcss";
import { useEffect, useState } from "react";
import "./Po.css";
import "../../app/css/reset.css";

function Po() {
  useEffect(() => { }, []); //대괄호 넣으면 한번 실행

  // const [currentSlide, setCurrentslide] = useState(0); //현재 슬라이드

  // //슬라이즈 전환
  // const goToSlide = (index) => {
  //   setCurrentslide(index); //클릭한 부분에 맞는 슬라이드 번호
  // };

  // // 클릭 이벤트 처리 함수
  // function handleLinkClick(index) {
  //   goToSlide(index); //해당 슬라이드로 이동한다
  // }

  //메뉴 만들기
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  //지금 뭘 해야하지? 화면을 그리고 css로 위치를 잡는다
  // 화면을 여기에 만든다
  return (
    <div className="container">
      {/* <title>portfolio</title> */}

      {/* 헤더만 뽑아서 include 생각하기 메뉴 디자인은 부분은 비슷하게 가자 */}
      {/* #붙여서 영역이동 가능 */}
      <header>
        <nav>
          <div className="menu_icon" onClick={toggleMenu}>
            
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`menu_list ${isMenuOpen ? "open" : ""}`}>
            <li>
              <Link href="" className="link" id="sign">
                hover
              </Link>
            </li>
            <li>
              <Link href="/po/Intro" className="link">
                Intro
              </Link>
            </li>
            <li>
              <Link href="" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="link">
                AboutMe
              </Link>
            </li>
            <li>
              <Link href="#experience" className="link">
                Project
              </Link>
            </li>
            <li>
              <Link href="#blackHole" className="link">
                텟용메뉴
              </Link>
            </li>
            <li>
              <Link href="#contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* slide 만들기 */}
      <main className="main">
        <div className="slides" >
          <section id="home">

            <div className="home_header">천장</div>
            <section>
              <nav>
                <ul>
                  <li>사과</li>
                  <li>바나나</li>
                  <li>복숭아</li>
                </ul>
              </nav>
              <main>중앙부@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@</main>
              <aside>ad</aside>
            </section>
            <div className="home_footer">home바닥</div>
          </section>

          <section id="about">about부분</section>
          <section id="experience">experience부분</section>
          <section id="blackHole">blackHole부분</section>
          <section id="contact">contact부분</section>
        </div>

        <div id="floor">길부분</div>
      </main>

      {/* Footer 영역 */}
      {/* <footer>footer부분</footer> */}
    </div>
  );
}

export default Po;
