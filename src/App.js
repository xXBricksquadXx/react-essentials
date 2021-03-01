import { useState } from 'react';
import './App.css';

function SecretComponent() {
  return <h1>Secret information for authorized users only</h1>
}
function RegularComponent() {
  return <h1>Everyone can see this component.</h1>

}

                                                                                     //use state returns an array, 'feeling' is the state variable, 2nd will update state  
function App() {
  const [feeling, setFeeling] = useState("hungry");
 
return(
  <>
  <h1>Current feeling is {feeling}...</h1>
  <button onClick={() => setFeeling("hungry")}>hungry</button>
  <button onClick={() => setFeeling("hangry")}>
  hangry
  </button>
  <button onClick={() => setFeeling("A little better..")}> Enthuse</button>
  </>
);  
}
export default App;   
