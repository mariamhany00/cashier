import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

export default function TableSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(""); // indoor / outdoor
  const [tableNumber, setTableNumber] = useState("");
  const [tables, setTables] = useState([]);
  const [popupPlace, setPopupPlace] = useState("");
  const [popupType, setPopupType] = useState("");

  const fetchTables = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/table");
      setTables(res.data.data);
    } catch (error) {
      console.error("Failed to fetch tables:", error);
    }
  };

  useEffect(() => {
    fetchTables();
  }, []);

  const getStatusColor = (isAvailable) => {
    if (isAvailable === true) return "#09AE94"; // Green
    if (isAvailable === false) return "#C20A0A"; // Red
    return "#888888"; // Unknown status
  };

  const handleAddTable = async () => {
    if (!tableNumber || !popupType) return;

    try {
      const response = await axios.post("http://localhost:3000/api/v1/table", {
        number: parseInt(tableNumber),
        location: popupType,
      });

      const newTable = {
        ...response.data.data,
        isAvailable:
          response.data.data.isAvailable === undefined
            ? false
            : response.data.data.isAvailable,
      };

      setTables([...tables, newTable]);

      setShowPopup(false);
      setTableNumber("");
      setPopupPlace("");
      setPopupType("");
    } catch (error) {
      if (
        error.response &&
        error.response.data?.message === "Table already exists"
      ) {
        alert("⚠️ Table number already exists!");
      } else {
        alert("Something went wrong while adding the table.");
        console.error(error);
      }
    }
  };

  return (
    <div className="p-6 relative">
      {/* ✅ الفلاتر فوق */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Choose Table</h1>

        <div className="relative">
          <button
            onClick={() => setShowPopup(!showPopup)}
            className="flex items-center gap-2 border border-[#C20A0A] bg-white text-[#C20A0A] px-4 py-2 rounded-md hover:bg-[#C20A0A] hover:text-white transition"
          >
            <FaPlus />
            Add Table
          </button>

          {showPopup && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-md p-6 w-80 shadow-lg z-50">
              <div className="mb-4">
                <label className="block text-[#246FA8] font-medium mb-1">
                  Table Number
                </label>
                <input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md"
                  placeholder="Enter table number"
                />
              </div>

              <div className="mb-4">
                <span className="block text-[#246FA8] font-medium mb-2">
                  Choose Place
                </span>
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setPopupPlace("first");
                      setPopupType("");
                    }}
                    className={`px-4 py-2 rounded-md border border-[#246FA8] transition ${
                      popupPlace === "first"
                        ? "bg-[#246FA8] text-white"
                        : "bg-white text-[#246FA8] hover:bg-[#246FA8] hover:text-white"
                    }`}
                  >
                    First Floor
                  </button>
                  <button
                    onClick={() => {
                      setPopupPlace("second");
                      setPopupType("");
                    }}
                    className={`px-4 py-2 rounded-md border border-[#246FA8] transition ${
                      popupPlace === "second"
                        ? "bg-[#246FA8] text-white"
                        : "bg-white text-[#246FA8] hover:bg-[#246FA8] hover:text-white"
                    }`}
                  >
                    Second Round
                  </button>
                </div>
              </div>

              {popupPlace && (
                <div className="mb-4">
                  <span className="block text-[#246FA8] font-medium mb-2">
                    Choose Type
                  </span>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setPopupType("inside")}
                      className={`px-4 py-2 rounded-md border border-[#246FA8] transition ${
                        popupType === "inside"
                          ? "bg-[#246FA8] text-white"
                          : "bg-white text-[#246FA8] hover:bg-[#246FA8] hover:text-white"
                      }`}
                    >
                      Indoor
                    </button>
                    <button
                      onClick={() => setPopupType("outside")}
                      className={`px-4 py-2 rounded-md border border-[#246FA8] transition ${
                        popupType === "outside"
                          ? "bg-[#246FA8] text-white"
                          : "bg-white text-[#246FA8] hover:bg-[#246FA8] hover:text-white"
                      }`}
                    >
                      Outdoor
                    </button>
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  className="bg-[#F0F0F0] text-[#C20A0A] px-4 py-2 rounded-md"
                  onClick={() => {
                    setShowPopup(false);
                    setTableNumber("");
                    setPopupPlace("");
                    setPopupType("");
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#09AE94] text-white px-4 py-2 rounded-md"
                  onClick={handleAddTable}
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ فلاتر مكان العرض */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedPlace("inside")}
          className={`px-4 py-2 rounded-md border border-[#246FA8] transition ${
            selectedPlace === "inside"
              ? "bg-[#246FA8] text-white"
              : "bg-white text-[#246FA8] hover:bg-[#246FA8] hover:text-white"
          }`}
        >
          Indoor
        </button>
        <button
          onClick={() => setSelectedPlace("outside")}
          className={`px-4 py-2 rounded-md border border-[#246FA8] transition ${
            selectedPlace === "outside"
              ? "bg-[#246FA8] text-white"
              : "bg-white text-[#246FA8] hover:bg-[#246FA8] hover:text-white"
          }`}
        >
          Outdoor
        </button>
        <button
          onClick={() => setSelectedPlace("")}
          className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
        >
          Show All
        </button>
      </div>

      {/* ✅ عرض التربيزات المفلترة */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {tables
          .filter((table) => !selectedPlace || table.location === selectedPlace)
          .map((table) => (
            <div
              key={table._id}
              className="flex items-center justify-center h-32 border-4 rounded-md text-xl font-bold"
              style={{ borderColor: getStatusColor(table.isAvailable) }}
            >
              Table {table.number}
            </div>
          ))}
      </div>

      {/* ✅ كروت الحالة */}
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: "#09AE94" }}
          ></div>
          <span className="text-gray-700 font-medium">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: "#C20A0A" }}
          ></div>
          <span className="text-gray-700 font-medium">Not Available</span>
        </div>
      </div>
    </div>
  );
}



