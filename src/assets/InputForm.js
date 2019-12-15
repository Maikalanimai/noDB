import React, { Component } from "react";
import IngredientList from "./IngredientList";
import './inputForm.css'

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      quantity: null,
      value: null
    };
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    },
    () => console.log(this.state));
  }

  render() {
    return (
      <main>
        <IngredientList />
        <input
          onChange={e => this.handleChange(e, "quantity")}
          placeholder="Quantity"
          type="number"
        />
        <input
          onChange={e => this.handleChange(e, "value")}
          placeholder="Value in emeralds"
          type="number"
        />
        <button className='push'>Add to My Ingredients</button>
        
      </main>
    );
  }
}

export default InputForm;
