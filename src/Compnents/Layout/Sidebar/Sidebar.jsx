import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-[13px] w-[260px] h-[1032px] bg-white text-gray-800 pt-[30px] pb-[30px] px-[43px]">
      <h2
  className="mb-6"
  style={{
    color: '#246FA8',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    fontSize: '48px',
    lineHeight: '100%',
    letterSpacing: '0%',
    textAlign: 'center'
  }}
>
  Yoomy
</h2>
 <ul className="space-y-4 w-full">
    <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
      <Link to="/home/dashboard" className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center">
        Dashboard
      </Link>
    </li>
    <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
      <Link to="/home/tables" className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center">
        Tables
      </Link>
    </li>
    <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
      <Link to="/home/menu" className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center">
        Menu
      </Link>
    </li>
    <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
      <Link to="/home/settings" className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center">
        Settings
      </Link>
    </li>
    <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
      <Link to="/home/cashier" className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center">
        Cashier
      </Link>
    </li>
    <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
      <Link to="/home/history" className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center">
        History
      </Link>
    </li>
    <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
      <Link to="/home/store" className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center">
        Store
      </Link>
    </li>
    <li className="border border-[#246FA8] rounded-md py-2 flex justify-center items-center">
      <Link to="/home/first" className="hover:text-[#1a4f7c] font-semibold text-lg text-[#246FA8] text-center">
        First Page
      </Link>
    </li>
  </ul>
    </div>
  );
}
