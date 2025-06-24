import React, { useState } from 'react';
import Cards from '../../../Cards/Cards';

export default function Settings() {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    {
      name: "Pizza",
      icon: (isActive) => (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={isActive ? "white" : "#246FA8"} xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#a)">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m10.4149 10.7623.0005.0109m3.0868 3.0764.0005.0108M8.91554 15.349l.00046.0108m-.8276-8.44549L4.39857 19.9133l12.95163-3.7371m-.8271-8.43475c2.0971 2.09707 3.269 4.77055 3.5172 7.51635.067.7413-.4619 1.3752-1.1869 1.5293-1.0146.2158-1.9613-.5811-2.0926-1.615-.2412-1.9-.9437-3.5721-2.52-5.1484-1.5779-1.57793-3.3173-2.3457-5.25302-2.61955-1.02139-.1445-1.79555-1.1099-1.5387-2.10314.17236-.66653.76818-1.14208 1.45754-1.08543 2.78088.22851 5.49388 1.40332 7.61648 3.52587Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      name: "Main Dishes",
      icon: (isActive) => (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={isActive ? "white" : "#246FA8"} xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h1M5 11h1M3 8h4m8.5 0c-.1016.1108-1.5385-1.1574-1.7964-1.482-.3299-.4151-.7812-1.4305-.6974-1.5063.0838-.0758 1.1161.6812 1.3741 1.0058.258.3246 1.2213 1.8717 1.1197 1.9825Zm0 0c-.1016-.1108-1.5385 1.1574-1.7964 1.482-.3299.4151-.7812 1.4306-.6974 1.5064.0838.0758 1.1161-.6812 1.3741-1.0058.258-.3246 1.2213-1.8717 1.1197-1.9825Zm4 0c-.1016.1108-1.5385-1.1574-1.7964-1.482-.3299-.4151-.7812-1.4305-.6974-1.5063.0838-.0758 1.1161.6812 1.3741 1.0058.258.3246 1.2213 1.8717 1.1197 1.9825Zm0 0c-.1016-.1108-1.5385 1.1574-1.7964 1.482-.3299.4151-.7812 1.4306-.6974 1.5064.0838.0758 1.1161-.6812 1.3741-1.0058.258-.3246 1.2213-1.8717 1.1197-1.9825Zm-8.5 0h10m-10 10v1h7v-1c3.791-1.6553 6.0372-3.1749 6.45-5H3c.4128 1.8251 2.61 3.3447 5.6 4.0116Z" />
        </svg>
      ),
    },
    {
      name: "Appetizers",
      icon: (isActive) => (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={isActive ? "white" : "#246FA8"} xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8c-1.6-1.6-3.9-1.9-6.1.3-2.1 2.1-7.1 9.7-5.5 11.3s9.2-3.3 11.4-5.5c2.1-2.1 1.8-4.5.1-6.2Zm0 0 3.3-3.2M16 8V4m0 4h4m-3.8 5.8-2.2-2.2M8.3 10.2l2.1 2M9.2 15.4l2.1 2.2" />
        </svg>
      ),
    },
    {
      name: "Drinks",
      icon: (isActive) => (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={isActive ? "white" : "#246FA8"} xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12 12 7-8H5l7 8Zm0 0v8m-3 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-4">
      {/*  Header */}
      <header className="bg-white w-full">
        <nav className="mx-auto max-w-7xl flex items-center justify-center p-4">
          <ul className="flex gap-6 font-semibold text-lg">
            {categories.map(({ name, icon }) => {
              const isActive = activeCategory === name;
              return (
                <li
                  key={name}
                  onClick={() => setActiveCategory(name)}
                  className={`flex items-center gap-1 cursor-pointer px-3 py-1 rounded-md ${
                    isActive
                      ? "bg-[#246FA8] text-white"
                      : "text-[#246FA8] hover:text-[#1a4f7c]"
                  }`}
                >
                  {icon(isActive)}
                  <span>{name}</span>
                </li>
              );
            })}
            {/* Modified Button */}
            <button className="flex items-center gap-2 px-3 py-1 rounded-md border border-red-600 text-red-600 hover:text-red-800 hover:border-red-800 transition font-bold">
              Add Item
              <svg
                className="w-5 h-5 text-red-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </ul>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <h2 className="text-black text-xl font-semibold">
          {activeCategory ? `Choose ${activeCategory}` : "Choose Pizza"}
        </h2>
      </div>

      {/*  Cards */}
      <div className="p-6">
        <Cards />
      </div>
    </div>
  );
}

