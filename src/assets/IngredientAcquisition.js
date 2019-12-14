import React, { Component } from "react";
import axios from "axios";

class IngredientAcquisition extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get("/api/ingredients").then(res =>
      this.setState({
        list: res.data
      })
    );
  }


  render() {
    return (
      <div>
        IngredientAcquisition
        {this.state.list.map((e, i) => (
        <div className={e.name} key={i}>
          <h3>{e.name}</h3>
          <div>{e.value}</div>
          <button className='subtract'>-</button>
          <div>{e.quantity}</div>
          <button className='add'>+</button>
          <button className='sell'>Sell</button>
        </div>
      ))}
      </div>
    );
  }
}

export default IngredientAcquisition;
