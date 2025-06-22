import React from "react";
import { FaSearch } from "react-icons/fa";

export default function TableSelect({ onSearchChange, onFilter }) {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-md border-l border-gray-200 p-4">
      <h2 className="text-xl font-bold text-[#246FA8] mb-6">Search Tables</h2>

      {/* Search Box */}
      <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2 mb-6">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by number"
          className="w-full outline-none text-gray-700"
        />
      </div>

      {/* Filter Buttons */}
      <button
        onClick={() => onFilter("refreshed")}
        className="w-full bg-[#C20A0A] hover:bg-[#a50909] text-white py-2 rounded-md font-semibold mb-4 transition"
      >
        Refreshed
      </button>

      <button
        onClick={() => onFilter("in_progress")}
        className="w-full bg-[#EEAA42] hover:bg-[#d49434] text-white py-2 rounded-md font-semibold transition"
      >
        In Progress
      </button>
    </aside>
  );
}
