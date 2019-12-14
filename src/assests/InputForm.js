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
                Test
                {console.log(this.state.ingredientList)}
            </div>
        )
    }
}

export default InputForm