import './App.css';

import Main from "./component/weather/Main";

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
      <Main></Main>
      
    </div>
  );
}

export default App;
