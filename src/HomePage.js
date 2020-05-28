import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Snake Directory</h1>
                    <nav>
                        <Link to='/'>
                            <p className='link'>All Snakes</p>
                        </Link>
                        <Link to='/admin'>
                            <p className='link'>Enter New Snake</p>
                        </Link>
                    </nav>
                </header>
            </div>
        )
    }
}
