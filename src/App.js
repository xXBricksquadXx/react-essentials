
import './App.css';

function Header (props) { 
      console.log(props);  // pass props into function and hold all of the properties for this component
  return (                                      // props name has been passed as a key
    <header>
      <h1>{props.name} Business</h1> 
    </header>

  );
}

function Main(props) {
  return (
    <section>
      <p>{props.content} Management</p>
    </section>
  );
}                                                             //when we render the components we pass the properties into the components

function Footer(props){
  return(
    <footer>
      <p>I dont Get Tired...{props.year}</p>
    </footer>

  )
}                                       //display list in main comp

const assets = [
  "Precision",
  "Cultural Diversity",
  "Plan Carefully"
];

assets.map((asset) => console.log(asset))




function App() {
  return (                                                      //create a component by creating a function, the function returns jsx
    <div className="App">
    <Header  name="MY"/>                                    
    <Main  content="THE"/>
    <Footer year={new Date().getFullYear()}/>
     
    </div>
  );
}

export default App;    // need 2 import in index
