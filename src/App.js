import React from 'react';
import { Button } from 'reactstrap';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import Main from './containers/Main/Main'
import About from './containers/About/About'
import NotFound from './containers/NotFound/NotFound'

function App() {
  return (
    <div >
      <Switch>
        <Route
            exact
            path='/'
            component={Main}
        />

        <Route
          exact 
          path='/about'
          component={About}
        />
        
        <Route
          path='/'
          component={NotFound}
        />
    </Switch>
    </div>
  );
}

export default App;
