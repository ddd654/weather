import Link from "next/link";
import { list } from "postcss";
import { useEffect, useState } from "react";
import './Po.css';
import '../../app/css/reset.css';


function Po() {

  useEffect(() => {
  }, []) //대괄호 넣으면 한번 실행

  const [currentSlide, setCurrentslide] = useState(0); //현재 슬라이드

  //슬라이즈 전환
  const nextSlide = () => {
    setCurrentslide((prev) => (prev + 1) % 4); //슬라이드의 수
  };


  //지금 뭘 해야하지? 화면을 그리고 css로 위치를 잡는다
  //화면을 여기에 만든다
  return (
    <div className="container">
      <title>portfolio</title>

      {/* 헤더만 뽑아서 include 생각하기 메뉴 디자인은 부분은 비슷하게 가자 */}
      <header>
        <div>구역1</div>
        <nav>
          <ul>
            {/* #붙여서 영역이동 가능 */}

            <li><Link href='/po/Intro' className="link">Intro</Link></li>
            <li><Link href='#home' className="link">Home</Link></li>
            <li><Link href='#about' className="link">About me</Link></li>
            <li><Link href='#experience' className="link">Project</Link></li>
            <li><Link href='#contact' className="link">Contact</Link></li>


          </ul>
        </nav>
      </header>

      {/* slide 만들기 */}
      <main className="main">

        <div
          className="slide"
          style={{
            // transform: `translateY( -${currentSlide * 100}vh)`, //
            // transition: "transform 1s ease-in-out",
          }}
        >

          <section id="home">home</section>
          <section id="about">about</section>
          <section id="experience">experience</section>
          <section id="contact">contact</section>
        </div>
      </main>

      {/* Footer 영역 */}
      <footer>바닥부분</footer>

    </div>
  )
}

export default Po;

