import React, { Component } from 'react'

export default class 
 extends Component {
    render() {
        return (
            <li>
                <h1>{this.props.snakeObj.species}</h1>
                <p>Spicy Level: {this.props.snakeObj.spicy_factor}</p>
                <br></br>
                <p>Animal Care Level: {this.props.snakeObj.care_level}</p>

            </li>
        )
    }
}
