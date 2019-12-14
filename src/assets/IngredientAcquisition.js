import React, { Component } from "react";
import axios from "axios";

class IngredientAcquisition extends Component {
  constructor() {
    super();
    this.state = {
      list: [{
        id: 0,
        name: "Pigman flesh",
        value: 2,
        quantity: 3
      },
      {
        id: 1,
        name: "Golden Avia Feather",
        value: 160,
        quantity: 24
      }]
    };
  }

  componentDidMount() {
    axios.get("http://localhost:4000/api/ingredients").then(res =>
      this.setState({
        list: res.data
      })
    );
  }


  render() {
    return (
      <div>
        IngredientAcquisition
        {this.state.list.map(e => (
        <div className={e.name}>
          <h3>{e.name}</h3>
          <div>{e.value}</div>
          <div>{e.quantity}</div>
        </div>
      ))}
      </div>
    );
  }
}

export default IngredientAcquisition;
