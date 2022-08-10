import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [emotion, setEmotion] = useState("happy"); 
  const [secundary, setSecundary] = useState("tired"); 

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secundary} right now`);
  }, []);

  const what = useState();
  
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>    
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>

      <h2>Current secundary emotion is {secundary}</h2>   
      <button onClick={() => setSecundary("gratefull")}>Grateful</button>
    </div>
  );
}

export default App;
