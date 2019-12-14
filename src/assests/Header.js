import React, {Component} from 'react'
import Axios from 'axios'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            valueSold: []
        }
    }

    
    
    render () {
        console.log(this.state.valueSold)
        return(
            <div>
                Header.js
                {this.state.valueSold}
            </div>
        )
    }
}