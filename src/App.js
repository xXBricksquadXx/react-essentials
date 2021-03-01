
import './App.css';

function Header () {       // A component is a function that returns UI
  return (
    <header>
      <h1>The Business</h1>
    </header>

  );
}

function Main() {
  return (
    <section>
      <p>Data Management</p>
    </section>
  );
}




function App() {
  return (                                                      //create a component by creating a function, the function returns jsx
    <div className="App">
    <Header />                                          
    <Main />
    <h3>Footer</h3>
     
    </div>
  );
}

export default App;    // need 2 import in index
