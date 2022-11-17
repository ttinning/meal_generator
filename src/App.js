import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="container">
      <main>
        <Router>
            <Switch>
              <Route path='/' exact component={Home} />
            </Switch> 
        </Router>
        <footer><Footer /></footer>
      </main>
    </div>
  );
}

export default App;
