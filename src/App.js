
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
    return<div>{JSON.stringify(data)}</div>;
  }

  return <div>No User Available</div>;

}

export default App;