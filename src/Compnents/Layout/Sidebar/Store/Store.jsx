import React, { useEffect, useState } from "react";
import Header from "../../../Header/Header";
import axios from "axios";
import { FaPlus } from "react-icons/fa";

export default function Store() {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImage, setEditImage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) setImagePreview(URL.createObjectURL(file));
  };

  const handleAddDish = async () => {
    try {
      const formData = new FormData();
      formData.append("name", newName);
      formData.append("price", newPrice);
      formData.append("image", imageFile);
      formData.append("managerId", "REPLACE_WITH_ID");
      formData.append("kitchenId", "REPLACE_WITH_ID");
      formData.append("category", "Main Dishes");

      const res = await axios.post("http://localhost:3000/api/v1/meals", formData);
      console.log(res.data);
      setShowPopup(false);
      setNewName("");
      setNewPrice("");
      setImageFile(null);
      setImagePreview("");

      // إعادة تحميل الوجبات بعد الإضافة
      const updatedRes = await axios.get("/api/v1/meals");
      setMeals(updatedRes.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <Header />

      {/* Add New Dish Button + Popup */}
      <div className="relative flex justify-end px-6">
        <button
          onClick={() => setShowPopup(!showPopup)}
          className="flex items-center gap-2 border border-[#C20A0A] bg-white text-[#C20A0A] px-4 py-2 rounded-md hover:bg-[#C20A0A] hover:text-white transition"
        >
          <FaPlus />
          Add New Dish
        </button>

        {showPopup && (
          <div className="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded-md p-6 w-96 shadow-lg z-50">
            <div className="flex flex-col items-center mb-4">
              <label
                htmlFor="image-upload"
                className="w-full h-[160px] border-2 border-dashed border-[#C20A0A] flex flex-col items-center justify-center cursor-pointer rounded-md"
              >
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="h-full w-full object-cover rounded-md" />
                ) : (
                  <div className="flex flex-col items-center text-[#C20A0A]">
                    <FaPlus className="text-2xl" />
                    <span className="font-semibold mt-2">Add Dish</span>
                  </div>
                )}
              </label>
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#246FA8] font-medium mb-1">
                Add Name
              </label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-[#246FA8] font-medium mb-1">
                Add Price
              </label>
              <input
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
              />
            </div>

            <div className="flex justify-between">
              <button
                className="bg-[#F0F0F0] text-[#C20A0A] px-4 py-2 rounded-md"
                onClick={() => setShowPopup(false)}
              >
                Cancel
              </button>
              <button
                onClick={handleAddDish}
                className="bg-[#09AE94] text-white px-4 py-2 rounded-md"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Display Meals */}
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
              <FaPlus className="w-4 h-4 mr-1" />
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
