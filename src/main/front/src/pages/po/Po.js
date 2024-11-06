import Link from "next/link";
import { list } from "postcss";
import { useEffect } from "react";
import './Po.css';
import '../../app/css/reset.css';

function Po() {


  useEffect(() => {



  }, []) //대괄호 넣으면 한번 실행


  //지금 뭘 해야하지? 화면을 그리고 css로 위치를 잡는다
  //화면을 여기에 만든다
  return (
    <div>
      <div className="container">

        {/* 헤더만 뽑아서 include 생각하기 메뉴 디자인은 부분은 비슷하게 가자 */}
        <header>
          <div>구역1</div>
          <nav>
            <ul>
              {/* #붙여서 영역이동 가능 */}
              <li><Link href="#main" className="link">main 태그 영역이동 이거 누르면</Link></li>
              <li><Link href='/po/Home' className="link">Home</Link></li>
              <li><Link href='/po/AboutMe' className="link">About me</Link></li>
              <li><Link href='/po/Project' className="link">Project</Link></li>
              <li><Link href='/po/Contact' className="link">Contact</Link></li>

              <li><Link href='/lotto/Lotto' className="link">Lotto</Link></li>
              <li><Link href='/main/Main' className="link">main</Link></li>

            </ul>
          </nav>
        </header>

        <main className="main">
          여기로 이동함
          <title>portfolio</title>
          <section>
            <div className="right">오른쪽 구역</div>
            <div className="left">왼쪽 구역</div>
          </section>

          <section>중간</section>
          <section>중간2</section>
        </main>

        <footer>바닥부분</footer>
        
      </div>
    </div>
  )
}

export default Po;

