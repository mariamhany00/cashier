import React from 'react';
import Sidebar from '../Layout/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 ml-64">
        <Outlet />
      </div>
    </div>
  );
}
