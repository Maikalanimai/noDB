import React from "react";
import "./App.css";
import InputForm from './assests/InputForm'
import Header from "./assests/Header"

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
    </div>;
  }
}

export default App;
