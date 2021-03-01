
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

function Footer(){
  return(
    <footer>
      <p>I dont Get Tired...</p>
    </footer>

  )
}




function App() {
  return (                                                      //create a component by creating a function, the function returns jsx
    <div className="App">
    <Header />                                          
    <Main />
    <Footer />
     
    </div>
  );
}

export default App;    // need 2 import in index
