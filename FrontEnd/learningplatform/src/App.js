import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Templates/Login';
import Home from './Templates/Home';
import Register from './Templates/Register';
import Courses from './Templates/Courses';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/courses" element={<Courses/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
