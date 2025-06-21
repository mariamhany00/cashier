import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Compnents/Login/login';
import Regestr from './Compnents/Regestration/Regestr';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Regestr />} />
      </Routes>
    </Router>
  );
}

export default App;
