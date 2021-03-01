import { useState, useEffect } from 'react';
import './App.css';

function SecretComponent() {
  return <h1>Secret information for authorized users only</h1>
}
function RegularComponent() {
  return <h1>Everyone can see this component.</h1>

}

                                                                                     //use state returns an array, 'feeling' is the state variable, 2nd will update state  
function App() {
  const [feeling, setFeeling] = useState("Gucci");
  const [secondary, setSecondary] = useState("✈️");

  useEffect(() => {
    console.log(`Im ${feeling} af tho..`);
  },[feeling] );

  useEffect(() => {
    console.log(`Im ${secondary} af tho..`);
  }, [secondary]);
 

return(
  <>
  <h1>Current feeling is {feeling}...{secondary}</h1>
  <button onClick={() => setFeeling("Gucci")}>Gucci</button>
  <button onClick={() => setSecondary("✈")}>Fly</button>
  <button onClick={() => setFeeling("Airplane Mode")}>
  Airplane Mode
  </button>
  <button onClick={() => setFeeling("Good Looking")}> Enthuse</button>
  </>
);  
}
export default App;   
