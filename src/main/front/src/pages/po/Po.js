import Link from "next/link";
import { list } from "postcss";
import { useEffect } from "react";
// import '../../app/css/reset.css';

function Po() {


  useEffect(() => {




  }, []) //대괄호 넣으면 한번 실행

  return (
    <div>
      <ul>
        <li><Link href='/lotto/Lotto'>Lotto</Link></li>
        <li><Link href='/po/Po'>po</Link></li>

      </ul>


    </div>
  )
}

export default Po;

