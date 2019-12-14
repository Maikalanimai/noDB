import React, {Component} from 'react'
import IngredientList from './IngredientList'



class InputForm extends Component{
    constructor() {
        super();
        this.state = {
            ingredientList: []
        }
    }

    
    render() {
        return(
            <div>
                InputForm.js
                
                <IngredientList/>
                <input placeholder="Quantity"/>
                <input placeholder="Value in emeralds"/>
                <button>Add to My Ingredients</button>
            </div>
        )
    }
}

export default InputForm