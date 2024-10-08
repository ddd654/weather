import './App.css';

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
      
    </div>
  );
}

export default App;
