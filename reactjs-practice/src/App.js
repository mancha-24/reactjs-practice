import './App.css';
import  { useState } from 'react';

function useInput(initialValue){
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value)
    },
    () => setValue(initialValue)
  ];
}


function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
const submit = (e) => {
  e.preventDefault();
  alert(`${titleProps.value}, ${colorProps.value}`);
  resetTitle("");
  resetColor("#000000");
};
  return (
   <form onSubmit={submit}>
    <input
      {...titleProps}
      type="text" 
      placeholder='color title...'
    />
    <input
      {...colorProps}
      type="color"
    />
    <button>Add</button>
   </form>
  );
}

export default App;
