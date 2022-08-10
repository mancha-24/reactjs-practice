import './App.css';
import  { useState, useEffect } from 'react';

function GithubUser(props)
{
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.location}</p>
      <img src={props.data.avatar_url} height={150} alt={props.name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/moonhighway`
    )
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError)
    }, []);

    if(loading) return <h1>Loading...</h1>
    if(error) return <pre>{JSON.stringify(error)}</pre>
    if(!data) return null;

  return (
   <GithubUser data={data}/>
  );
}

export default App;
