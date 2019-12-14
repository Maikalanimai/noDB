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

  subtract(id) {
    axios.put(`/api/ingredients/${id}?add=false`).then(res =>
        this.setState({
            list: res.data
        }))
  }

  add(id) {
      axios.put(`/api/ingredients/${id}?add=true`).then(res =>
        this.setState({
            list: res.data
        }))
  }
  
  render() {
    return (
      <div>
        IngredientAcquisition
        {this.state.list.map((e) => (
        <div className={e.name} key={e.id}>
          <h3>{e.name}</h3>
          <div>{e.value}</div>
          <button className='subtract' onClick={() => this.subtract(e.id)}>-</button>
          <div>{e.quantity}</div>
          <button className='add' onClick={()=>this.add(e.id)}>+</button>
          <button className='sell'>Sell</button>
        </div>
      ))}
      </div>
    );
  }
}

export default IngredientAcquisition;
