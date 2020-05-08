import React, { Component } from 'react'
import request from 'superagent';
import SnakeCard from './SnakeCard'

export default class ListPage extends Component {
    state = {
        initialSearch: 'Snakes',
        snakeData: []
    }

    async componentDidMount() {
        const allSnakes = await request.get(`https://morning-taiga-48701.herokuapp.com/api/${this.state.initialSearch}`);
        console.log(allSnakes.body);

        this.setState({snakeData: allSnakes.body})
    }
    render() {
        console.log(this.state.snakeData);
        return (
            <div>
                <ul>
                {
                    this.state.snakeData.map(snake => {
                        return <SnakeCard snakeObj={snake}/>
                    })
                }
                </ul>
            </div>
        )
    }
}
