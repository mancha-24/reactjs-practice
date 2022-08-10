import './App.css';
import React, { useState, useEffect, useReducer } from 'react';

function App() {

  const [emotion, setEmotion] = useState("happy");
  const [secundary, setSecundary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secundary} right now`);
  }, []);

  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>Sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>

      <h2>Current secundary emotion is {secundary}</h2>
      <button onClick={() => setSecundary("gratefull")}>Grateful</button>

      <input
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
      <label>
        {checked ? "checked" : "not checked"}
      </label>
    </div>
  );
}

export default App;
