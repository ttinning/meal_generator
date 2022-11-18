import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <div className="container">
      <main>
        <Router>
            <Routes>
              <Route path='/' exact element={<Home/>} />
            </Routes> 
        </Router>
        <footer><Footer /></footer>
      </main>
    </div>
  );
}

export default App;
