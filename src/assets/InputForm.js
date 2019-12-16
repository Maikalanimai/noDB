import React, { Component } from "react";
import IngredientList from "./IngredientList";
import "./inputForm.css";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: null,
      value: null,
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key) {
    this.setState(
      {
        [key]: e.target.value
      }
      // () => console.log(this.state)
    );
  }

  render() {
    return (
      <main>
        <IngredientList handleChange={this.handleChange} />
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
        <button
          className="push"
          onClick={() =>
            this.props.push(
              this.state.name,
              this.state.value,
              this.state.quantity
            )
          }
        >
          Add to My Ingredients
        </button>
      </main>
    );
  }
}

export default InputForm;
