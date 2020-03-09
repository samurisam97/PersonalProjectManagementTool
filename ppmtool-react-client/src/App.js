import React from 'react';

import classes from './App.module.css';

import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Dashboard />
      <LoginForm />
    </div>
  );
}

export default App;
