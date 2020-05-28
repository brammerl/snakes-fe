import React from 'react';

import {
  BrowserRouter as Router,
  Route, 
  Switch
} from "react-router-dom";
import './App.css';

import HomePage from './HomePage'
import ListPage from './List'
import AdminPage from './AdminPage'
import DetailPage from './DetailPage'




function App() {
  return (
    <div className="App">
      <Router>
            <HomePage/>
                    <Switch>
                        <Route
                            path='/'
                            exact
                            render={(routerProps) => <ListPage {...routerProps}/>}
                        />
                        <Route
                            path='/admin'
                            render={(routerProps) => <AdminPage {...routerProps}/>}
                        />  
                        
                         <Route
                            path='/snake/:id'
                            render={(routerProps) => <DetailPage {...routerProps}/>}
                        /> 
                    </Switch>
                </Router>
    </div>
  );
}

export default App;
