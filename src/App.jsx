import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './Compnents/Login/login';
import Regestr from './Compnents/Regestration/Regestr';
import Layout from './Compnents/Layout/Layout';

import Dashboard from './Compnents/Layout/Sidebar/Dashboard/Dashboard';
import Tables from './Compnents/Layout/Sidebar/Table/Table';
import Menu from './Compnents/Layout/Sidebar/Menu/Menu';
import Settings from './Compnents/Layout/Sidebar/Settings/Settings';
import Cashier from './Compnents/Layout/Sidebar/Cashier/Cashier';
import History from './Compnents/Layout/Sidebar/History/Hisrory';
import Store from './Compnents/Layout/Sidebar/Store/Store';
import First from './Compnents/Pages/First/First';

function App() {
  return (
    <Router>
      <Routes>
        {/* الصفحات بدون سايدبار */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Regestr />} />

        {/* الصفحات بسايدبار + First Page */}
        <Route path="/home" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tables" element={<Tables />} />
          <Route path="menu" element={<Menu />} />
          <Route path="settings" element={<Settings />} />
          <Route path="cashier" element={<Cashier />} />
          <Route path="history" element={<History />} />
          <Route path="store" element={<Store />} />
          <Route path="first" element={<First />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

