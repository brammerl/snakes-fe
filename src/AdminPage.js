import React, { Component } from 'react'

import request from 'superagent';
export default class AdminPage extends Component {
    state = {
        "species": "",
        "spicy_factor": 0,
        "venomous": false,
        "care_level": 0
    }

    generalHandleChange = (e) => {

        const newState = {};
        newState[e.target.name] = e.target.value;

        this.setState(newState);
    };



    submitHandleChange = async (e) => {
        e.preventDefault();
        
        const newSnake = await request.post(`https://morning-taiga-48701.herokuapp.com/api/snakes/`,{
            species: this.state.species,
            spicy_factor: this.state.spicy_factor,
            venomous: this.state.venomous, 
            care_id: this.state.care_level
    });


        this.setState({snakeAdded: newSnake});
        this.props.history.push('/')
    }



    render() {
        console.log(JSON.stringify(this.state));
        const {species, spicy_factor, venomous, care_level} = this.state;
        return (
            <div id='formPage'>
                <form onSubmit={this.submitHandleChange} >
                    <h3>New Snake</h3>
                    <label>
                        Snake Common Name 
                        <input value={species} name='species' onChange={this.generalHandleChange}/>
                    </label>
                    <label> 
                        Spicy Factor
                    <input value={spicy_factor} name="spicy_factor" onChange={this.generalHandleChange}/>
                    </label>
                    <label>
                        Is Venemous
                        <input type='radio' checked={venomous === 'true'} value='true' name='venomous' onChange={this.generalHandleChange}/>
                    </label>
                    <label>
                        Is Not venomous
                        <input type='radio' checked={venomous === 'false'} value='false' name='venomous' onChange={this.generalHandleChange}/>
                    </label>
                    <label> Care Level (1-3)
                        <input value={care_level} name='care_level' onChange={this.generalHandleChange} type-/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
