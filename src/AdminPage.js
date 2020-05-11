import React, { Component } from 'react'
import { addSnake } from './api-calls'
export default class AdminPage extends Component {
    state = {
        "species": "",
        "spicy_factor": 0,
        "venomous": false,
        "care_level": ""
    }

    generalHandleChange = (e) => {

        const newState = {};
        newState[e.target.name] = e.target.value;

        this.setState(newState);
    };

 

    submitHandleChange = async (e) => {
        e.PreventDefault();
        const stringedState = JSON.stringify(this.state)
        const newSnake = await addSnake(stringedState);


        this.setState({snakeAdded: newSnake});
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
                    <label> Care Level
                        <input value={care_level} name='care_level' onChange={this.generalHandleChange}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
