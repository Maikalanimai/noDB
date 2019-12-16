import React from "react";
import "./App.css";
import InputForm from './assets/InputForm.js'
import Header from "./assets/Header.js"
import IngredientsAcquired from './assets/IngredientsAcquired'

class App extends React.Component {
  
  render() {
    return <div className="App">
      <Header/>
      <div className='transition'></div>
      <div className='main'>
        <InputForm/>
      <hr />
      <IngredientsAcquired/>
      </div>
    </div>;
  }
}

export default App;
