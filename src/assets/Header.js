// *Complete
import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {

  
  componentDidMount() {
    this.props.updateValue();
  }

  render() {
    return (
      <header>
        <h1>Wynncraft Ingredient Tracker</h1>
        <h2>
          <div className="sold">Emeralds from selling ingredients:</div>
          <p>{this.props.valueSold}</p>
        </h2>
      </header>
    );
  }
}
