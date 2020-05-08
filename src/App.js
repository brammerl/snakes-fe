import React from 'react';

import {
  BrowserRouter as Router,
  Route, 
  Switch
} from "react-router-dom";
import './App.css';

import HomePage from './HomePage'
import ListPage from './List'



function App() {
  return (
    <div className="App">
      <Router>
                    <Switch>
                        <Route
                            path='/'
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />}
                        />
                        <Route
                            path='/ListPage'
                            render={(routerProps) => <ListPage {...routerProps}/>}
                        />  
                    </Switch>
                </Router>
    </div>
  );
}

export default App;
