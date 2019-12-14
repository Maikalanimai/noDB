import React from "react";
import "./App.css";
import InputForm from './assets/InputForm'
import Header from "./assets/Header"
import IngredientsAcquired from './assets/IngredientsAcquired'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      item: []
    };
  }
  render() {
    return <div className="App">
      <Header/>
      <InputForm/>
      <hr />
      <IngredientsAcquired/>
    </div>;
  }
}

export default App;
