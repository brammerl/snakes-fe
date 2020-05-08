import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <header>
                    Snake Directory 
                    <nav>
                        <Link to='/ListPage'>
                            <p>All Snakes</p>
                        </Link>
                        <Link to='/SnakeNamesPage'>
                            <p>Snake Names</p>
                        </Link>
                    </nav>
                </header>
            </div>
        )
    }
}
