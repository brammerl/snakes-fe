import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class 
 extends Component {
    render() {
        return (
            <li className='snakeCard'>
                <Link to={`/snake/${this.props.snakeObj.id}`}>
                <h1>{this.props.snakeObj.species}</h1>
                </Link >

            </li>
        )
    }
}
