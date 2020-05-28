import React, { Component } from 'react';
import { getSnake } from './api-calls'
import request from 'superagent';


export default class DetailPage extends Component {
    state = { snake: null,
        newName: ''
    }
componentDidMount = async () => {

            console.log(this.props.match.params.id);
            const fetchedData = await getSnake(this.props.match.params.id)
            
    
    
            this.setState(fetchedData);
        }

changeName = (e) => {
    this.setState({ newName: e.target.value })
}

submitHandle = async (e) => {
    e.preventDefault(); 

    const newName = await request.put(`https://morning-taiga-48701.herokuapp.com/api/snakes/${this.props.match.params.id}`, {
        species: this.state.newName
    })

    this.setState(newName);
    this.props.history.push('/')
}

deleteHandle = async (e) => {
    e.preventDefault();

    const deleted = await request.delete(`https://morning-taiga-48701.herokuapp.com/api/snakes/${this.props.match.params.id}`);

    this.setState(deleted);
    this.props.history.push('/')
}
    
    render() {
    const {newName} = this.state;
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
                <section>
                    <form onSubmit={this.submitHandle}>
                        <label> Rename Snake
                            <input value={newName} onChange={this.changeName}/>
                        </label>
                        <button>Submit</button>
                    </form>
                </section>
                <section>
                    <button onClick={this.deleteHandle}>Delete</button>
                </section>
            </div>
        

    }
}