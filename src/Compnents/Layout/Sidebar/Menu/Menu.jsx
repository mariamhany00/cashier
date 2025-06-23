import React, { useEffect, useState } from 'react';
import Header from '../../../Header/Header';
import Cards from '../../../Cards/Cards';
import axios from 'axios';

export default function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('');

  
  useEffect(() => {
    const addCategoryBtn = document.querySelector('button:has(svg path[d*="M12 7.757"])');
    if (addCategoryBtn) {
      const handleClick = (e) => {
        e.preventDefault();
        setShowModal(true);
      };
      addCategoryBtn.addEventListener("click", handleClick);
      return () => {
        addCategoryBtn.removeEventListener("click", handleClick);
      };
    }
  }, []);

  const handleAddCategory = async () => {
    try {
      await axios.post("http://localhost:3000/api/v1/kitchen", {
        name: categoryName,
        icon: categoryIcon,
      });
      setShowModal(false);
      setCategoryName('');
      setCategoryIcon('');
    } catch (err) {
      console.error("Error adding category:", err);
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* Header */}
      <Header />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-[20px] p-[20px] w-[300px] h-[320px] flex flex-col gap-[10px] shadow-lg">
            <h2 className="text-center font-semibold text-lg text-[#246FA8] mb-2">Add Category</h2>

            <label className="text-[#246FA8] font-medium">Add Name</label>
            <input
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="border border-[#246FA8] rounded px-2 py-1 outline-none"
              placeholder="Category Name"
            />

            <label className="text-[#246FA8] font-medium">Add Icon</label>
            <input
              value={categoryIcon}
              onChange={(e) => setCategoryIcon(e.target.value)}
              className="border border-[#246FA8] rounded px-2 py-1 outline-none"
              placeholder="Icon URL or class"
            />

            <div className="flex justify-between mt-6 gap-4 w-[276px]">
              <button
                onClick={handleAddCategory}
                className="bg-[#09AE94] text-white px-5 py-2 rounded font-semibold w-full"
              >
                Done
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="border border-[#C20A0A] text-[#C20A0A] px-5 py-2 rounded font-semibold w-full"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className="p-6">
        <Cards />
      </div>
    </div>
  );
}
