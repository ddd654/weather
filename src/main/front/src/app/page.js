
"use client"; // 클라이언트 컴포넌트로 설정

import { useEffect, useState } from "react";
import axios from "axios";
import Main from "../../pages/main/Main";
import "./css/reset.css";

export default function Home() {
  // 백 데이터 테스트
  const [hello, setHello] = useState('');
  const [isLoading, setIsLoading] = useState(true); //로딩



  // //로딩중
  // if (isLoading) {
  //   return (
  //     <div>
  //       로딩중...
  //     </div>
  //   )
  // }

  return (
    <div>
      <div>
        <Main></Main>
        
      </div>
    </div>
  );
}
