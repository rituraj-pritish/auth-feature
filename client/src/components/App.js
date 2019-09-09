import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Form from './Form';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Form} />
        <Route exact path='/auth/login' component={Login} />
        <Route exact path='/auth/register' component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
