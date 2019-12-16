import React, { Component } from "react";
import axios from "axios";
import "./ingredientAcquisition.css";

class IngredientAcquisition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get("/api/ingredients").then(res =>
      this.setState({
        list: res.data
      })
    ).catch(res =>
      alert('Check your conection to the server')      
    );
  }

  subtract(id) {
    axios.put(`/api/ingredients/${id}?add=false`).then(res =>
      this.setState({
        list: res.data
      })
    );
  }

  add(id) {
    axios.put(`/api/ingredients/${id}?add=true`).then(res =>
      this.setState({
        list: res.data
      })
    );
  }

  sell(id) {
    axios.delete(`/api/ingredients/${id}`).then(res =>
      this.setState({
        list: res.data
      })
    );
  }

  render() {
    return (
      <div className="ingredient_container">
        {this.state.list.map(e => (
          <div id="ingredient_obj" className={e.name} key={e.id}>
            <h3>{e.name}</h3>
            <div className='value'>Value: {e.value}</div>
            <div className="maths">
              <button className="subtract" onClick={() => this.subtract(e.id)}>
                -
              </button>
              <div>{e.quantity}</div>
              <button className="add" onClick={() => this.add(e.id)}>
                +
              </button>
            </div>
            <button className="sell" onClick={() => this.sell(e.id)}>
              Sell
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default IngredientAcquisition;
