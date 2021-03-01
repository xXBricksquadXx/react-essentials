import { useState } from 'react';
import './App.css';

function SecretComponent() {
  return <h1>Secret information for authorized users only</h1>
}
function RegularComponent() {
  return <h1>Everyone can see this component.</h1>

}

                                                                                     //use state returns an array   
function App() {
  const [feeling] = useState("hungry");
 
return(
  <>
  <h1>Current feeling is {feeling}...</h1>
  </>
);  }

export default App;   
