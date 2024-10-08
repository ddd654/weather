import './App.css';

import UserQnaRegist from "./component/weather/UserQnaRegist";
import UserQnaList from "./component/weather/UserQnaList";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const[ hello, setHello] = useState('');
  useEffect( () => {
    axios.get('/api/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error))
  }, []);

  return (
    <div>
      백 데이터 : {hello} 
      <br></br>
      1. 여기에 메인 레이아웃
      2. 임시
      <UserQnaRegist></UserQnaRegist>

      3. 임시2
      <UserQnaList></UserQnaList>
      
      
    </div>
  );
}

export default App;
