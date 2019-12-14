// *Complete
import React, {Component} from 'react'
import Axios from 'axios'

export default class Header extends Component {
    constructor() {
        super()
        this.state = {
            valueSold: null
        }
    }

    componentDidMount() {
        Axios.get('/api/valueSold').then((res)=>
        this.setState({
            valueSold: res.data[0]
        })
        )
    }
    
    render () {
        return(
            <header>
                <h1>Wynncraft Item Counter</h1>
                Emeralds From selling Ingredients: {this.state.valueSold}
            </header>
        )
    }
}