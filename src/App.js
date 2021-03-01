import './App.css';
import lion from "./lion.jpg"

function Header (props) { 
       // pass props into function and hold all of the properties for this component
  return (                                      // props name has been passed as a key
    <header>
      <h1>{props.name} Business</h1> 
    </header>

  );
}

function Main(props) {
  return (
    <section>
      <p>{props.content} Motivation</p>
<img src={lion} height={400} alt="Fierce as a Lion"/>
      <ul style={{ textAlign: "left"}}>
        {props.assets.map((asset) => (
          <li key={asset.id}>{asset.title}</li>
        ))}                                                     
      </ul>
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
  "Plans Carefully",
  "Fresh"
];


const assetObjects = assets.map((asset , i) => ({id: i, title: asset }));
console.log(assetObjects);





function App() {
  return (                                                      //using curly braces bc we passing the variable..
    <div className="App">
    <Header  name="MY"/>                                    
    <Main  content="THE" assets={assetObjects}/>
    <Footer year={new Date().getFullYear()}/>
     
    </div>
  );
}

export default App;    // need 2 import in index
