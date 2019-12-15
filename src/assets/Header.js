// *Complete
import React, { Component } from "react";
import Axios from "axios";
import "./header.css";
import IngredientAcquisition from "./IngredientAcquisition";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueSold: null
    };
  }

  updateValue() {
    Axios.get("/api/valueSold").then(res =>
      this.setState({
        valueSold: res.data[0]
      })
    );
  }

  componentDidMount() {
    this.updateValue();
  }

  render() {
    return (
      <header>
        <h1>Wynncraft Ingredient Tracker</h1>
        <h2>
          <div className="sold">Emeralds from selling ingredients:</div>
          <p>{this.state.valueSold}</p>
        </h2>
      </header>
    );
  }
}
