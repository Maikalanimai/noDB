import React from "react";
import "./App.css";
import InputForm from './assets/InputForm.js'
import Header from "./assets/Header.js"
import IngredientsAcquired from './assets/IngredientsAcquired'

class App extends React.Component {
  
  render() {
    return <div className="App">
      
     
      <IngredientsAcquired/>
      
    </div>;
  }
}

export default App;
