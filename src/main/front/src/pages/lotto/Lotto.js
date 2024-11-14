import { useState } from 'react';
import '../../app/css/reset.css';
import './Lotto.css';

function Lotto() {

  const [random, setRandom] = useState(null);

  // 1. 버튼을 누르면 랜덤 번호가 나온다
  function randomNumber() {
    const arr1 = [];

    let i = 0;
    while (arr1.length < 7) { //배열이 다 찰때까지
      arr1[i] = Math.trunc(Math.random() * 45) + 1;

      i++
    }
    let randomNumber = Math.trunc(Math.random() * 45) + 1; // 0나오는 경우 있어서 +1
    console.log(randomNumber);
    setRandom(randomNumber); //setRandom에 넣는다?

    //중복 숫자 안나오게 하기
    // 숫자를 배열에 넣고, 중복을 확인한다
    // 중복이 없으면 찍기, 있으면 다시 뽑기

    
  }

  // 2. 1 ~ 45 중에서 랜덤으로 7개를 뽑아 표시하기

  return (
    <div className='body'>

      <header>lotto</header>

      {/* body의 핵심내용, 핵심주제 / 확장하는 콘텐츠 */}
      <main>number</main>

      {/* 페이지 안에 독립적 구획 */}
      <section>
        {/* 문서, 페이지 안에 독립적 구획 */}
        <article>
          <span>article1</span>
          <ul>
            <li>{random}</li>
            <li>{random}</li>
            <li>{random}</li>
            <li>{random}</li>
            <li>{random}</li>
            <li>{random}</li>
            <li>{random}</li>
            <li>{random}</li>
          </ul>
          <button type='button' onClick={randomNumber}>버튼1</button>
        </article>
      </section>

      {/* 간접 컨텐츠 */}
      <aside>
        간접 컨텐츠
      </aside>

      {/* 개인정보 처리방침, 저작권, 이름 등등 */}
      <footer></footer>
    </div>
  )
}


export default Lotto;
