import React, { useEffect, useState } from "react";
import Header from "../../../Header/Header";
import axios from "axios";

export default function Store() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImage, setEditImage] = useState("");

  useEffect(() => {
    axios
      .get("/api/v1/meals")
      .then((res) => {
        setMeals(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleCardClick = (meal) => {
    setSelectedMeal(meal);
    setEditName(meal.name);
    setEditPrice(meal.price);
    setEditImage(meal.image);
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/v1/meals/${selectedMeal._id}`,
        {
          name: editName,
          price: editPrice,
          image: editImage,
        }
      );
      const updatedMeals = meals.map((m) =>
        m._id === selectedMeal._id
          ? { ...m, name: editName, price: editPrice, image: editImage }
          : m
      );
      setMeals(updatedMeals);
      setSelectedMeal(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <Header />
      <div className="p-6 bg-white flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.isArray(meals) && meals.length > 0 ? (
            meals.map((meal) => (
              <div
                key={meal._id}
                onClick={() => handleCardClick(meal)}
                className="w-[190px] h-[260px] border rounded-lg p-[15px] flex flex-col gap-[12px] shadow hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ border: "1px solid #246FA8" }}
              >
                <img
                  alt={meal.name}
                  src={meal.image}
                  className="w-full h-[100px] object-cover rounded"
                />
                <h3 className="text-md font-bold text-[#246FA8]">
                  {meal.name}
                </h3>
                <p className="text-sm font-bold text-[#246FA8]">
                  {meal.price} AED
                </p>
                <p className="text-xs text-[#246FA8]">
                  {Array.isArray(meal.ingredients)
                    ? meal.ingredients.join(", ")
                    : ""}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-[#246FA8] col-span-full">
              No meals found.
            </p>
          )}
        </div>
      </div>

      {/* Edit Modal */}
      {selectedMeal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-xl p-6 w-[300px] border border-[#246FA8] space-y-4">
            <img
              src={editImage}
              alt="Preview"
              className="w-28 h-28 object-cover mx-auto rounded"
            />
            <button className="flex items-center justify-center w-full border border-[#246FA8] text-[#246FA8] py-1 rounded font-semibold text-sm">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 7.757v8.486M7.757 12h8.486"
                />
              </svg>
              Edit Photo
            </button>

            <div>
              <label className="text-sm font-semibold text-[#246FA8]">
                Edit Name
              </label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full border border-[#246FA8] rounded px-2 py-1 mt-1 text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#246FA8]">
                Edit Price
              </label>
              <input
                type="text"
                value={editPrice}
                onChange={(e) => setEditPrice(e.target.value)}
                className="w-full border border-[#246FA8] rounded px-2 py-1 mt-1 text-sm"
              />
            </div>

            <div className="flex justify-between pt-2">
              <button
                onClick={handleUpdate}
                className="text-white px-4 py-1 rounded"
                style={{ backgroundColor: "#09AE94" }}
              >
                Done
              </button>
              <button
                onClick={() => setSelectedMeal(null)}
                className="bg-white text-red-600 border border-red-600 px-4 py-1 rounded hover:text-red-800 hover:border-red-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
