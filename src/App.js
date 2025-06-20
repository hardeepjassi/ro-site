import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/home';
import Review from './pages/Review';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
