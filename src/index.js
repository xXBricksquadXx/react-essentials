import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"

const [, , Balling] = ["Bow", "Arrow", "Benz"];
console.log(Balling)



ReactDOM.render(

<App  authorized={false}/>,

  document.getElementById('root') // second argument is where we want to put it.
);

