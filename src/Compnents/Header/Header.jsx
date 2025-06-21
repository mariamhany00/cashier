import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md w-full">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-4">
        <div className="text-[#246FA8] font-semibold text-2xl">Yoomy</div>
        <ul className="flex gap-6 text-[#246FA8] font-semibold">
          <li className="hover:text-[#1a4f7c] cursor-pointer">Pizza</li>
          <li className="hover:text-[#1a4f7c] cursor-pointer">Main Dishes</li>
          <li className="hover:text-[#1a4f7c] cursor-pointer">Appetizers</li>
          <li className="hover:text-[#1a4f7c] cursor-pointer">Drinks</li>
        </ul>
      </nav>
    </header>
  );
}
