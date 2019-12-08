import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Routes';

// Imports Register and Login
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

// Imports Dashboard
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Project from '../pages/Project';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/project" component={Project} isPrivate />
    </Switch>
  );
}
