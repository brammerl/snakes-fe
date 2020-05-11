import React, { Component } from 'react';
import { getSnake } from './api-calls'


export default class DetailPage extends Component {
    state = { snake: null }
componentDidMount = async () => {

            console.log(this.props.match.params.id);
            const fetchedData = await getSnake(this.props.match.params.id)
            
    
    
            this.setState(fetchedData);
        }
    
    render() {
    
        return <div>
                <h2>{this.state.species}</h2>
                <ul>
                    <li>
                        <p>Spicy Factor: {this.state.spicy_factor}</p>
                    </li>
                    <li>
                        <p>Venomous? : {JSON.stringify(this.state.venomous)}</p>
                    </li>
                    <li>
                        <p>Care Level : {JSON.stringify(this.state.care_level)}</p>
                    </li>
                </ul>
            </div>
        

    }
}