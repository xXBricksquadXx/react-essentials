
import { useEffect, useState} from 'react';
import './App.css';

//https://api.github.com/users/xXBricksquadXx

function App({ login }){
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(response =>response.json())
    .then(setData);
  }, []);

  if (data) {
    return(<div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url}/>
    </div>);
  }

  return <div>No User Available</div>;

}

export default App;