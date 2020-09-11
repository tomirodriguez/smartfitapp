import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import LogIn from './components/LogIn/LogIn';
import Dashboard from './components/Dashboard/Dashboard';
import * as firebase from 'firebase/app';
import 'firebase/auth';

function App() {

  firebase.auth().onAuthStateChanged( user => {
    if(user){
      console.log(user)
    }
  })

  return (
    <Router basename='/'>
      <div className="app">
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route exact path='/'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
