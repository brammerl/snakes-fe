import React, { Component } from 'react'
import request from 'superagent';
import SnakeCard from './SnakeCard'

export default class ListPage extends Component {
    state = {
        initialSearch: 'Snakes',
        snakeData: [],
        filter: ''
    }

    async componentDidMount() {
        const allSnakes = await request.get(`https://morning-taiga-48701.herokuapp.com/api/snakes`);
        console.log(allSnakes.body);

        this.setState({snakeData: allSnakes.body})
    }

    handleChange = (e) => {
        this.setState({ filter: e.target.value})
      }
    render() {
        return (
            <div>
                <section>
                <select onChange={this.handleChange}>
             <option value="">Show all</option>
            {
              this.state.snakeData.map(
              snake => <option value={snake.care_level}>{snake.care_level}</option>

              )
            }
        </select>
                </section>
                <ul>
                {
                    this.state.snakeData.filter(snake => {
                        if (!this.state.filter) return true;

                        return snake.care_level === this.state.filter;
                    })
                    .map(snake => {
                        return <SnakeCard snakeObj={snake}/>
                    })
                }
                </ul>
            </div>
        )
    }
}
