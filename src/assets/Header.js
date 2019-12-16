// *Complete
import React, { Component } from "react";
import "./header.css";

export default class Header extends Component {


  render() {
    return (
      <header>
        <img src="https://gamepedia.cursecdn.com/wynncraft_gamepedia_en/b/bc/Wiki.png?version=b55530c028917d4d0686802efb57b492" alt='wynncraft logo'/>
        <h1>Wynncraft Ingredient Tracker</h1>
        <h2>
          <div className="sold">Emeralds from selling ingredients:</div>
          <p> {this.props.valueSold}</p>
        </h2>
      </header>
    );
  }
}
