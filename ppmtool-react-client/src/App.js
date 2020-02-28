import React from 'react';
import classes from './App.module.css';
import Dashboard from './components/Dashboard';
import Header from './components/Layout/NavBar/Header';

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
