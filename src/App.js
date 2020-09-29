import React from 'react';

import { BrowserRouter as Router, Switch, Route } from  'react-router-dom';

import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects'

import ProyectoState from './context/projects/projectState';
import TareaState from './context/tasks/tareaState';

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/new-account" component={NewAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
