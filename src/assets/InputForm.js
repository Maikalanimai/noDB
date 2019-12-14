import React, { Component } from "react";
import IngredientList from "./IngredientList";

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
      <div>
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
        <button>Add to My Ingredients</button>
        
      </div>
    );
  }
}

export default InputForm;
